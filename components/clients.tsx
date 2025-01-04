/* eslint-disable @next/next/no-img-element */
import { companies, testimonials } from "@/data";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";
import React from "react";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from <span className="text-purple">satisfied clients</span>{" "}
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 max-lg:mt-10">
        <InfiniteMovingCards items={testimonials} direction="right" speed="slow" pauseOnHover />

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
              <img src={company.img} alt={company.name} className="md:w-10 w-5" />
              <img src={company.nameImg} alt={company.name} className="md:w-24 w-20" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
