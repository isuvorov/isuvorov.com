import { AboutCard } from '@/components/AboutCard';
import { cvLink } from '@/config/config';

export default function Test() {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <AboutCard>
            <a
              href={cvLink}
              target="_blank"
              // eslint-disable-next-line max-len
              className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
              rel="noreferrer"
            >
              Get my CV
            </a>
          </AboutCard>
        </div>
      </section>
    </>
  );
}
