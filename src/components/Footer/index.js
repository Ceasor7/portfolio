'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { DribbleIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../icons';

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-12 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <div className="flex items-center mt-8">
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a href="https://example.com" className="inline-block w-6 h-6 mr-4">
          <DribbleIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href="https://example.com"
          className="inline-block w-6 h-6 mr-4 bg-light rounded-full"
        >
          <GithubIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>
      <div className="w-full mt-6 relative font-medium border-t border-solid border-light py-6 px-8 flex flex-row items-center justify-between">
        <span className="text-center">
          &copy;2024 Joseph Gateru. All rights reserved
        </span>
        <Link href="/sitemap.xml" className="text-center underline">
          Sitemap.xml
        </Link>
        <div className="text-center">
          Made with &hearts; by{' '}
          <a href="https://" className="text-center underline">
            {' '}
            Joseph Gateru
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
