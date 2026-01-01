"use client";

import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1324 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1324, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Review = () => {
  return (
    <section className="pt-16 pb-16">
      <SectionHeading
        heading="Testimonials From Customers"
        subHeading="Lorem ipsum dolor sit amet elit, sed do eiusmod tempor."
      />

      <div className="w-[80%] mx-auto mt-16">
        <Carousel
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
        >
        {/*-------------Review----1-------*/}
          <ReviewCard
            image="/images/u1.png"
            title="Great QUality"
            username="Jasica Don"
            userRole="App developer"
          />
        {/*-------------Review----2-------*/}
          <ReviewCard
            image="/images/u2.png"
            title="Great QUality"
            username="Jasica Don"
            userRole="App developer"
          />
        {/*-------------Review----3-------*/}
          <ReviewCard
            image="/images/u3.png"
            title="Great QUality"
            username="Jasica Don"
            userRole="App developer"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Review;
