import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const VanillaTodo = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none text-light dark:text-dark">
        <div className="p-7">
          <ImageCarousel
            images={[
              '/vanillatodo.PNG',
              '/vanillatodo1.PNG',
              '/vanillatado2.PNG',
            ]}
          />
        </div>
      </div>
      <div className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">
              Vanilla Javascript Todo Application
            </h1>
            <p>
              The Todo application, crafted with HTML, CSS, and Vanilla
              JavaScript, serves as a practical tool for managing daily tasks.
              The core functionality is engineered using Vanilla JavaScript,
              enabling users to record their day's objectives. As tasks are
              completed, they can be effortlessly marked off the list, providing
              a satisfying visual cue of progress. Additionally, the application
              boasts a deletion feature, allowing for the removal of any
              unwanted items, thus maintaining a clutter-free and focused to-do
              list.
            </p>
          </div>
          <div className="p-7 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold">Technologies</h1>
            <div>
              <div className="flex flex-row">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/html5.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  HTML
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/css.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  CSS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/javascript.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Javascript
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/Vanilla-Javascript-ToDo-list"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
          <Link
            href="https://65f0028ea4d96080377c7e5b--resilient-malabi-1284e0.netlify.app/"
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

export default VanillaTodo;
