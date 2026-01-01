import React from "react";
import SectionHeading from "../../Helper/SectionHeading";

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
    id: 4,
    image: "/images/c4.png",
    name: "Figma",
    Location: "Dhaka, Bangladesh",
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

      
    </section>
  );
};

export default TopCompany;
