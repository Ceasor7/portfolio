import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const CaliApp = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel
            images={[
              '/cali101.PNG',
              '/cali102.PNG',
              '/cali103.PNG',
              '/cali104.PNG',
            ]}
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">
              Creative Arts Leadership Institute Version 1{' '}
              <span className="font-semibold">CALI 1</span>
            </h1>
            <p>
              The Creative Arts Leadership Institute Version 1 represents a
              significant milestone in the digital presence of the institute.
              Developed using the modern web technologies Next.js, TailwindCSS,
              and TypeScript, the website offers a dynamic and responsive user
              experience. It serves as a comprehensive resource for those
              seeking information about CALI's mission, initiatives, and the
              dedicated team members driving its success. Additionally, the
              website features a user-friendly contact form, enabling seamless
              communication with the CALI administration for inquiries and
              support.
            </p>
          </div>
          <div className="p-7 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl mb-3 font-bold">Technologies</h1>
            <div>
              <div className="flex flex-row">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/nextjs.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  NextJS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/tailwindcss.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Tailwindcss
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/framermotion.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Framer Motion
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/CALI_nextjs/tree/main"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
          <Link
            href="https://cali-website1.vercel.app/"
            className="text-dark dark:text-light py-3 px-5 mt-3 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deployment Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaliApp;
