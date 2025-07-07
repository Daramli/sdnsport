import React from "react";
import { useTranslationProvider } from "../hooks/useTranslationProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const { t } = useTranslationProvider();
  return (
    <footer className="bg-red-900 text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between">
          {/* روابط السوشيال ميديا */}
          <div className="mb-4 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2" id="contact">
              {t("social")}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61568073047447"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-facebook-f fa-x"></i> {/* أيقونة فيسبوك */}
              </a>
              <a
                href="https://x.com/sdnsport1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-twitter fa-x"></i>{" "}
                {/* أيقونة X (يمكنك اختيار أي أيقونة أخرى متاحة) */}
              </a>
              <a
                href="https://www.instagram.com/sdnsport1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-instagram fa-x"></i>{" "}
                {/* أيقونة انستجرام */}
              </a>
              <a
                href="https://www.tiktok.com/@sdn.sport1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500"
              >
                <i className="fab fa-tiktok fa-x"></i> {/* أيقونة لينكدإن */}
              </a>
            </div>
          </div>

          {/* أرقام التواصل */}
          <div className="mb-4 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t("contact")} </h4>
            <ul className="space-y-2">
              {/* مندوب مصر */}
              <li>
                <a
                  href="https://wa.me/201550343549" // استبدل هذا الرقم برقم المندوب المصري
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  📞 {t("egy")}
                </a>
              </li>
              {/* مندوب السودان */}
              <li>
                <a
                  href="https://wa.me/249909377787" // استبدل هذا الرقم برقم المندوب السوداني
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  📞 {t("sdn")}
                </a>
              </li>
              {/* مندوب السعودية */}
              <li>
                <a
                  href="https://wa.me/966530365877" // استبدل هذا الرقم برقم المندوب السعودي
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  📞 {t("ksa")}
                </a>
              </li>
            </ul>
          </div>

          {/* تاريخ التأسيس */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Established</h4>
            <p className="text-gray-300">2024</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved by SDN Sport
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
