import HomeLottieAnimation from "../Home/HomeLottieAnimation"



const AboutCoverSection = () => {
  return (
    <section className='w-full h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-row items-center justify-center text-dark dark:text-light'>
        <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
            <HomeLottieAnimation />
        </div>
        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
            Dream Big, Work Hard, Achieve More!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
            This Mantra Drives My Work As A Passionate Freelancer. I Blend Innovative Technology With Timeless Design For Captivating Digital Experiences. Inspired By Nature And Literature, I'm A Perpetual Learner Embracing Challenges. With Each Project, I Aim To Leave A Lasting Impact—One Pixel At A Time.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection