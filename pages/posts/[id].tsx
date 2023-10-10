/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

import PostLayout from '@/components/PostLayout';

const components = {
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula} // try passing different color schemes, drak, dracula etc.
        language={match[1]}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code>{children}</code>
    );
  },
};

// https://www.99darshan.com/posts/1-markdown-blog-with-next-typescript-tailwind

export default function PostPage({ data: meta, content }: matter.GrayMatterFile<string>) {
  return (
    <PostLayout>
      {/* <img src={`/${meta.socialImage}`} className="w-3/4 mx-auto" /> */}
      <main className="prose w-3/4  mx-auto">
        <h1 className="text-6xl">{meta.title}</h1>
        <main className="container mx-auto px-3 py-4 md:px-0">
          <article className="prose">
            <ReactMarkdown components={components} remarkPlugins={[remarkGfm]} className="prose">
              {content}
            </ReactMarkdown>
          </article>
        </main>
        {/* <div dangerouslySetInnerHTML={{ __html: md(markdownItProps).render(content) }}></div> */}
      </main>
    </PostLayout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }));
  const res = {
    paths,
    fallback: false,
  };
  return res;
}

export async function getStaticProps({ params: { id } }: { params: { id: string } }) {
  const content = fs.readFileSync(`posts/${id}.md`, 'utf-8');
  const props = matter(content);
  //   console.log(props);
  return {
    props: {
      data: props.data,
      content: props.content,
    },
  };
}
