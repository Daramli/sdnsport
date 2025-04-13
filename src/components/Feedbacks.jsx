import React from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import Marquee from "react-fast-marquee";
import Section from "./Section";

const Feedbacks = () => {
  const { t } = useTranslationProvider();
  return (
    // <section className="p-8 py-12 bg-white" id="feedbacks">
    //   <h1 className="text-2xl mb-4 text-center text-red-600 font-bold mt-[50px]">
    //     {t("feedbacks")}
    //   </h1>
    <Section id={"feedbacks"} title={t("feedbacks")} isGrey={false} dir="ltr">
      <Marquee className="overflow-hidden">
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"> */}
        {[
          { image: "/images/screenshot1.jpg", alt: "Feedback 1" },
          { image: "/images/screenshot2.jpg", alt: "Feedback 2" },
          { image: "/images/screenshot3.jpg", alt: "Feedback 3" },
          { image: "/images/screenshot4.jpg", alt: "Feedback 4" },
          { image: "/images/screenshot5.jpg", alt: "Feedback 5" },
          { image: "/images/screenshot6.jpg", alt: "Feedback 6" },
          { image: "/images/screenshot7.jpg", alt: "Feedback 7" },
          { image: "/images/screenshot8.jpg", alt: "Feedback 8" },
          { image: "/images/screenshot9.jpg", alt: "Feedback 9" },
          { image: "/images/screenshot10.jpg", alt: "Feedback 10" },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4 shadow bg-white">
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
        {/* </div> */}
      </Marquee>
    </Section>
  );
};

export default Feedbacks;
