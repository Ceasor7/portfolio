import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const Juza = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel images={['/juzaholding.PNG', '/juzaholding1.PNG']} />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">Juza Holding Page</h1>
            <p>
              Juza is a dynamic holding page crafted with the modern
              technologies of Next.js and Tailwind CSS, designed to serve as the
              gateway to a vibrant community where businesses flourish and
              connections are made. "Welcome to J-uza - Where Community Matters
              and Businesses Thrive!" encapsulates our ethos. At J-uza, we
              prioritize community trade, empowering you to advertise your
              services and engage with customers effectively. Our platform is
              more than just a marketplace; it's a catalyst for sustaining and
              expanding business within our diverse ecosystems. Connect, trade,
              and uncover new opportunities with J-uza, where your business's
              growth is our community's success.
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
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/Juza-holding-page"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
          <Link
            href="https://juza-holding-page.vercel.app/"
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

export default Juza;
