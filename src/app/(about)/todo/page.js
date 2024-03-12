import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const TodoApp = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel
            images={['/todoapp.PNG', '/todoapp1.PNG', '/todoapp2.PNG']}
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">
              Todo Web application | Firebase Auth | Firestore database{' '}
            </h1>
            <p>
              This Todo web application, crafted using Next.js and Tailwind CSS,
              offers a sleek and efficient way to manage tasks. At its core, it
              features robust Firebase user authentication, leveraging Google
              Auth for creating user profiles and facilitating login processes.
              The app's backbone is a Firestore database, meticulously designed
              to store and organize todo items, ensuring a seamless and
              productive user experience.
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
                  <img src="/firebase.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Firebase
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/Todo-app-nextjs"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
          <Link
            href="https://ticketing-app12.vercel.app/"
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

export default TodoApp;
