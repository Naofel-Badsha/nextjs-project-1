import React from "react";
import SectionHeading from "../../Helper/SectionHeading";
import PriceCard from "./PriceCard";

const Price = () => {
  return (
    <section className="pt-16 pb-16">
      <SectionHeading
        heading="Pricing Packages"
        subHeading="Lorem ipsum dolor sit amet elit, sed do eiusmod tempor."
      />

      <div className="w-[80%] mx-auto mt-16">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <PriceCard type="Basic" price="199"/>
            <PriceCard type="Standard" price="399"/>
            <PriceCard type="Extended" price="799"/>
        </div>
      </div>
    </section>
  );
};

export default Price;
