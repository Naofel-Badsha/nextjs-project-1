import React from 'react';
import JobSearchBox from './JobSearchBox';
import Image from 'next/image';

const Hero = () => {
    return (
      <section className="relative w-full h-screen flex justify-center flex-col">
        <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 xl:grid-cols-2 gap-10">
          {/*-----------Text----Content--------------*/}
          <div>
            <h1 className="text-3xl sm:text-6xl font-bold">
              Join us & Explore Thousands of Jobs
            </h1>
            <p className="mt-4 text-sm sm:text-lg font-medium">
              Find Jobs, Employment & Career Opportunities
            </p>
            {/*-----------Job---SecrchBar-----------*/}
            <JobSearchBox />
          </div>
          {/*-----------Images----Content--------------*/}
          <div className="mx-auto hidden xl:block">
            <Image
              src="/images/hero.png"
              alt="Hero Image"
              width={900}
              height={900}
              priority
            />
          </div>
        </div>
      </section>
    );
};

export default Hero;