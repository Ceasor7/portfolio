import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const Scrapper = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel
            images={[
              '/webscrapper.PNG',
              '/webscrapper1.PNG',
              '/webscrapper2.PNG',
            ]}
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">Web Scrapper</h1>
            <p>
              A web scraper is a software application designed to automate the
              process of extracting data from websites. It simulates human
              navigation of the web by either implementing low-level Hypertext
              Transfer Protocol (HTTP), or embedding a full-fledged web browser.
              Web scrapers are used in a variety of digital businesses and
              activities, from price monitoring to data collection for research.{' '}
              <br />
              The web scraper in question is developed using Node.js, a powerful
              JavaScript runtime built on Chrome's V8 JavaScript engine. It's
              specifically designed to scan for price drops on the Amazon
              website. When it detects a price drop, it leverages Twilio's
              messaging services to send an alert to the user. This
              functionality not only aids consumers in making timely purchases
              but also supports businesses in monitoring competitor pricing
              strategies.
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
                  <img src="/twilio-icon.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Twilio
                </span>
              </div>
              <div className="flex flex-row mt-3">
                <div className="overflow-hidden rounded-3xl border border-solid border-accentDark/90 dark:border-dark">
                  <img src="/axios-icon.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  Axios
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-7 flex flex-col items-center">
          <Link
            href="https://github.com/Ceasor7/Ticketing-app"
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

export default Scrapper;
