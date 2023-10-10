import { Navbar } from '@/components/Navbar';

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <Navbar title />
          {children}
        </div>
      </section>
    </>
  );
}
