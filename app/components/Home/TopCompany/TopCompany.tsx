'use client'

import React from "react";
import SectionHeading from "../../Helper/SectionHeading";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TopCompanyCard from "./TopCompanyCard";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const companys = [
  {
    id: 1,
    image: "/images/c1.png",
    name: "Udemy",
    location: "London, UK",
    position: "28",
  },
  {
    id: 2,
    image: "/images/c2.png",
    name: "Stripe",
    location: "Kolkata, India",
    position: "30",
  },
  {
    id: 3,
    image: "/images/c3.png",
    name: "Dropbox",
    Location: "Lahore, Pakistan",
    position: "30",
  },
  {
    id: 4,
    image: "/images/c4.png",
    name: "Figma",
    Location: "Dhaka, Bangladesh",
    position: "30",
  },
  {
    id: 5,
    image: "/images/j5.png",
    name: "Canva",
    Location: "Thumpo, Bhutan",
    position: "30",
  },
];

const TopCompany = () => {
  return (
    <section className="pt-16 pb-16">
      <SectionHeading
        heading="Top Company Registered"
        subHeading="Some of the companies we've helped recruit excellent applicants over the years."
      />

      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
          {companys.map((company) =>{
            return <TopCompanyCard key={company.id} company={company}/>
          })}
        </Carousel>
        
      </div>
    </section>
  );
};

export default TopCompany;
