import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const Portfolio = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none text-light dark:text-dark">
        <div className="p-7">
          <ImageCarousel
            images={['/3d3.PNG', '/3d4.PNG', '/3d2.PNG', '/3d1.PNG', '/3d.PNG']}
          />
        </div>
      </div>
      <div className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">3D Portfolio Project</h1>
            <p>
              This 3D portfolio website showcases a cutting-edge intersection of
              technology and design, leveraging the power of three.js, ReactJS,
              and TailwindCSS. It's a testament to the seamless integration of
              3D graphics into web interfaces, providing an immersive user
              experience that stands out in the digital space. The use of
              three.js enables dynamic visualizations that are both performative
              and interactive, while ReactJS ensures a responsive and
              user-friendly interface. TailwindCSS adds an extra layer of
              customizability and modern styling, making this portfolio not just
              a display of technical prowess but also a reflection of personal
              branding and aesthetic sensibility.
            </p>
          </div>
          <div className="p-7 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold">Technologies</h1>
            <div>
              <div className="flex flex-row">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/reactjs.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  ReactJS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/tailwindcss.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Tailwindcss
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                  <img src="/threejs-1.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  ThreeJS
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
};

export default Portfolio;
