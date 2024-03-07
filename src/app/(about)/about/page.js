'use client';
import Image from 'next/image';
import Link from 'next/link';
import ProjectOne from '../../../../public/kmf.PNG';

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl my-5 text-dark dark:text-light dark:font-normal">
        My projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Kenya Music Festival
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/KMF2.0"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://kenyamusicfestival.com/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/kmf"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">Ticketing App</h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Ticketing-app"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://ticketing-app12.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/ticketing"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">CALI</h2>
          <div className="flex text-center flex-col">
            <Link
              href="https://github.com/Ceasor7/Cali"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://www.cali.institute/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/cali"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">Todo App</h2>
          <div className="flex text-center flex-col">
            <Link
              href="https://github.com/Ceasor7/Todo-app-nextjs"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://todo-app-nextjs-psi.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/todo"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Juza Holding Page
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Juza-holding-page"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://juza-holding-page.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Linkk
            </Link>
          </div>
          <Link
            href="/juza"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Attendance Web Application
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/attendance"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://kta-attendance12.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/attendance"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Cali Website 1.0
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Cali-website"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://cali-website1.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/cali1"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            3D Portfolio website
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/3D0-portfolio-using-threeJS"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
            <Link
              href="https://3d-joseph-gateru.vercel.app/"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployment Link
            </Link>
          </div>
          <Link
            href="/portfolio"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Nodejs Mpesa Intergration
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Nodejs-Mpesa-intergration"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
          </div>
          <Link
            href="/mpesa"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            Vanillajs Todo Application
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Vanilla-Javascript-ToDo-list"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
          </div>
          <Link
            href="/vanilla"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <div className="overflow-hidden rounded-md border border-solid border-dark dark:border-light">
            <Image
              src={ProjectOne}
              width={100}
              height={60}
              className="w-full h-auto"
            />
          </div>
          <h2 className="text-lg font-light dark:font-medium">
            NextJs Web Scrapper
          </h2>
          <div className="text-center flex flex-col">
            <Link
              href="https://github.com/Ceasor7/Nextjs-web-scripper"
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </Link>
          </div>
          <Link
            href="/scrapper"
            className="font-light dark:font-medium hover:underline"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
