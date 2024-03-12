import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const Mpesa = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel
            images={[
              '/mpesa.PNG',
              '/mpesa1.PNG',
              '/mpesa2.PNG',
              '/mpesa3.PNG',
              '/mpesa4.PNG',
            ]}
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">
              NodeJS | ReactJS Mpesa Intergration
            </h1>
            <p>
              The web application in question is designed to streamline mobile
              payment processes through M-Pesa integration. On the front end,
              the application boasts a sleek and responsive interface crafted
              with React.js and CSS, ensuring a seamless user experience. The
              backend architecture is robust, built with Node.js and Express.js,
              providing a sturdy foundation for handling requests. Utilizing
              libraries such as Axios and Cors, along with the utility of
              Nodemon for efficient development, the backend facilitates smooth
              communication with Safaricom's Daraja API. This interaction allows
              for the transmission of JSON documents, which are meticulously
              processed by the user interface before being relayed back to the
              database for further processing. The synergy between front and
              back end components exemplifies modern web application standards,
              offering a reliable and efficient service for handling M-Pesa
              transactions.
            </p>
          </div>
          <div className="p-7 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl mb-3 font-bold">Technologies</h1>
            <div>
              <div className="flex flex-row">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/nodejs.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  NodeJS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/expressjs-icon.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  ExpressJS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/reactjs.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  ReactJS
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/nodemon.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  nodemon
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/Nodejs-Mpesa-intergration"
            className="text-dark dark:text-light py-3 px-5 rounded-2xl hover:underline bg-accentDark/90 dark:bg-dark"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Mpesa;
