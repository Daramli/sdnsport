import React, { useState } from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import { useThemeProvider } from "../hooks/useThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { prices } from "../data/data";
import Section from "./Section";

const Products = () => {
  const { t } = useTranslationProvider();
  const { country } = useThemeProvider();

  return (
    // <section className="p-4 py-12 bg-gray-100">
    //   <h1
    //     className="text-2xl mb-4 text-center text-red-600 font-bold"
    //     id="products"
    //   >
    //     {t("products")}
    //   </h1>
    <Section id={"products"} title={t("products")} isGrey={true}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          "HILAL AWAY 24/25",
          "MERIEKH HOME 24/25",
          "SUDAN AWAY 24/25",
          "SUDAN HOME 24/25",
          "SUDAN ARMY",
        ].map((product, index) => {
          const [currentImageIndex, setCurrentImageIndex] = useState(0);

          const images = Array.from({ length: 5 }).map(
            (_, imgIndex) =>
              `/images/product${index + 1}_img${imgIndex + 1}.jpg`
          );

          const nextImage = () => {
            setCurrentImageIndex(
              (prevIndex) => (prevIndex + 1) % images.length
            );
          };

          const prevImage = () => {
            setCurrentImageIndex(
              (prevIndex) => (prevIndex - 1 + images.length) % images.length
            );
          };

          return (
            <div key={index} className="border rounded-lg p-4 shadow">
              {/* Carousel for product images */}
              <div className="relative mb-2">
                <img
                  src={images[currentImageIndex]}
                  alt={`${product} image ${currentImageIndex + 1}`}
                  className="w-full h-[500px] object-contain rounded-lg shadow-lg mx-auto" // استخدام w-full لجعل الصورة تتجاوب
                />
                {/* Buttons for carousel navigation */}
                <button
                  onClick={prevImage}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full "
                >
                  &#8249;
                </button>
                <button
                  onClick={nextImage}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
                >
                  &#8250;
                </button>
              </div>

              <h4 className="font-semibold mb-2">{product}</h4>
              <p className="mb-2">
                {country && `${prices[country]?.[product]} ${t("c" + country)}`}
              </p>

              <div className="flex flex-wrap gap-2 mb-2">
                {["M", "L", "XL", "XXL", "XXXL"].map((size) => (
                  <span
                    key={size}
                    className="border px-3 py-1 rounded bg-gray-100 text-gray-800"
                  >
                    {size}
                  </span>
                ))}
              </div>

              <a
                href={`https://wa.me/${
                  country === "السودان"
                    ? "249909377787"
                    : country === "السعودية"
                    ? "966530365877"
                    : "201550343549"
                }?text=${encodeURIComponent(
                  `الطلب بإسم:\n من دولة:\n  عدد التي شيرتات :\nنوع التي شيرت : ${product}  \nالمقاس المطلوب: \nالعنوان بالتفصيل:\nرقم المستلم:\nالاسم والرقم المطلوب طباعتهم:`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded flex items-center justify-center gap-2"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                {t("orderNow")}
              </a>
            </div>
          );
        })}
      </div>
    </Section>
    /* </section> */
  );
};

export default Products;
