import ImageCarousel from '@/src/components/Projects/ImageCarousel';
import Link from 'next/link';

const Attendance = () => {
  return (
    <div className="flex flex-col">
      <div className="m-2 sm:m-10 shadow-2xl dark:shadow-none rounded-xl text-light dark:text-dark">
        <div className="p-7 ">
          <ImageCarousel images={['/kmf.PNG', '/cali2.PNG', '/kmf3.PNG']} />
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col text-light dark:text-dark">
        <div className="flex mx-5 px-3 flex-row justify-between">
          <div className="p-7">
            <h1 className="text-2xl mb-3 font-bold">
              Kenya Theatre Awards Attendance Register
            </h1>
            <p>
              I developed the Kenya Theatre Awards attendance register website
              for the Kenya International Theatre Festival Trust organization.
              The website is a web application that uses Nextjs, a React
              framework, to create dynamic and interactive pages. The website
              also uses TailwindCSS, a utility-first CSS framework, to style the
              components and layout. The website uses Firebase, a cloud-based
              platform, to store and manage the data of the attendees. <br />{' '}
              The main feature of the website is the dashboard, which displays a
              list of the attendees who have registered for the event. The
              dashboard allows the user to confirm the attendance of each
              attendee by clicking on a checkbox and a "confirm" button. The
              dashboard also has a search bar that enables the user to filter
              the list by name. The search bar is implemented using the filter
              function in Nextjs, which returns a new array with only the
              elements that match the search criteria. <br /> The website is
              designed to be user-friendly, responsive, and secure. The user has
              to log in with their email and password before accessing the
              dashboard. The website uses Firebase Authentication, a service
              that provides secure and easy authentication for web applications.
              The website also uses Firebase Hosting, a service that provides
              fast and reliable hosting for web applications.
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

export default Attendance;
