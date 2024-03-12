import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

export default function Kmf() {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel images={['/kmf.PNG', '/kmf2.PNG', '/kmf3.PNG']} />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl font-bold">Kenya Musical Festival</h1>
            <p>
              The Kenya Music Festival is a prestigious event that showcases the
              rich and diverse musical talents of the Kenyan people. The
              festival aims to promote cultural exchange, artistic excellence
              and national unity through music. The website for the festival is
              designed and developed by me, using the latest technologies and
              frameworks. I used Next.js, a React-based framework that enables
              fast and scalable web development. I also used Tailwind CSS, a
              utility-first CSS framework that allows me to create custom and
              responsive designs with ease. Finally, I used Framer Motion, a
              library that provides powerful and intuitive animation features
              for React components. The website has a modern and elegant look,
              with smooth transitions and animations that enhance the user
              experience. The website also has reusable components that are used
              in various pages of the website, such as the header, footer,
              navigation bar and cards. These components help to maintain
              consistency and reduce code duplication. The website is fully
              responsive and works well on different devices and screen sizes.
              The website showcases the festival's history, objectives,
              programs, sponsors, partners and performers. It also provides
              information on how to participate, register, buy tickets and
              contact the organizers. The website is a reflection of my passion
              and skills as a web developer, and I am proud to have contributed
              to the success of the Kenya Music Festival.
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
            href="https://github.com/Ceasor7/KMF2.0"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
          <Link
            href="https://kenyamusicfestival.com/"
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
}
