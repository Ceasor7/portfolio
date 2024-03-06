'use client';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <div>
      <h2 className="text-center my-5 text-dark dark:text-light dark:font-normal">
        My projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex bg-dark dark:bg-accentDark/90 text-light dark:text-dark py-10 px-10 flex-col items-center justify-center rounded-md">
          <h2 className="text-lg font-light dark:font-medium">Project title</h2>
          <p className="font-light dark:font-medium">Project description</p>
          <div className="mt-4 flex flex-col">
            <a
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Link
            </a>
            <a
              className="font-light dark:font-medium hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          </div>
          <Link href="/">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
