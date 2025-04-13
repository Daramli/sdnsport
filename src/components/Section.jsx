import React from "react";

const Section = ({ children, id, title, isGrey, ...props }) => {
  return (
    <section
      {...props}
      className={` px-8 py-12  ${isGrey ? "bg-gray-100" : "bg-white"}`}
      id={id}
    >
      <h1 className="text-2xl mb-4 text-center mt-[50px] md:mt-8 text-red-600 font-bold">
        {title}
      </h1>
      {children}
    </section>
  );
};

export default Section;
