import ImageCarousel from '@/src/components/Projects/ImageCarousel';

const Juza = () => {
  return (
    <div className="flex">
      <div className="w-1/2 h-full mr-7 mt-6 rounded-2xl bg-dark dark:bg-accentDark/90 text-light dark:text-dark">
        <div className="p-7 mb-12">
          <ImageCarousel images={['/kmf.PNG', '/cali2.PNG', '/kmf3.PNG']} />
        </div>
      </div>
      <div className="w-1/2 h-full ml-7 mt-6 rounded-2xl bg-dark dark:bg-accentDark/90 text-light dark:text-dark">
        <div className="p-7">
          <h1 className="text-2xl font-bold">Kenya Musical Festival</h1>
          <p>This is the content of the second section.</p>
        </div>
        <div className="p-7">
          <h1 className="text-2xl font-bold">Technologies</h1>
          <div>
            <div className="flex flex-row">
              <div className="overflow-hidden rounded-3xl border border-solid border-dark dark:border-light">
                <img src="/nextjs.svg" className="h-10 w-10" />
              </div>
              <span className="ml-3 flex justify-center text-center items-center">
                NextJS
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
                <img src="/framermotion.svg" className="h-10 w-10" />
              </div>
              <span className="ml-3 flex justify-center text-center items-center">
                Framer Motion
              </span>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col">
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
      </div>
    </div>
  );
};

export default Juza;
