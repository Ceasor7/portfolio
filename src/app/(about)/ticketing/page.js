import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const TicketingApp = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel
            images={[
              '/ticketingapp.PNG',
              '/ticketingapp1.PNG',
              '/ticketingapp2.PNG',
              '/ticketingapp3.PNG',
            ]}
          />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">Ticketing System</h1>
            <p>
              Our Ticketing web application is a robust solution designed for a
              repair shop to streamline their service requests and
              collaborations. Developed using the cutting-edge Next.js framework
              and styled with Tailwind CSS for a sleek, responsive user
              interface, our platform ensures an efficient and user-friendly
              experience. At its core, the application utilizes a MongoDB
              database, interfaced through a well-defined API that leverages
              Mongoose schemas to structure the data tables effectively. <br />
              Customers can effortlessly create tickets detailing the issues
              they're encountering with their devices, be it hardware
              malfunctions or software glitches. The system also facilitates
              project collaboration requests, allowing users to propose joint
              ventures with our skilled team. Our commitment to excellence is
              reflected in the seamless integration of technology and service,
              providing a reliable tool for both the repair shop and its
              clientele.
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
                  <img src="/mongodb.svg" className="h-10 w-10" />
                </div>
                <span className="ml-3 flex justify-center text-center items-center">
                  MongoDB
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

export default TicketingApp;
