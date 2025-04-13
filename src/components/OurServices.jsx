import React from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import { ourServicesData } from "../data/data";
import Section from "./Section";

const OurServices = () => {
  const { t } = useTranslationProvider();
  return (
    // <section className="px-8 pd-12 pb-12 bg-white" id="services">
    //   <h1 className="text-2xl mb-4 text-center mt-[100px] text-red-600 font-bold">
    //     {t("services")}
    //   </h1>
    <Section id={"services"} title={t("services")} isgrey={false}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {ourServicesData.map((service) => (
          <div
            key={service.id}
            className={`border p-4 rounded shadow ${
              service.isCommingSoon ? "opacity-60" : "opacity-1"
            }  relative`}
          >
            <h4 className="text-lg font-semibold mb-2 text-red-600">
              {t(service.title)}
            </h4>
            <p className="text-red-600">{t(service.description)}</p>
            {service.isCommingSoon && (
              <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded">
                {t("comingSoon")}
              </span>
            )}
          </div>
        ))}
      </div>
    </Section>
    // </section>
  );
};

export default OurServices;
