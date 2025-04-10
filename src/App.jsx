import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import WaveDivider from './components/WaveDivider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';




const translations = {
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    contact: "تواصل معنا",
    selectCountry: "اختر دولتك",
    confirmOrder: "تأكيد الطلب",
    orderNow: "اطلب الآن",
    namePrint: "اسم للطباعة (اختياري):",
    numberPrint: "رقم للطباعة (اختياري):",
    مصر: "مصر",
    السودان: "السودان",
    السعودية: "السعودية",
    أخرى: "أخرى",
    priceSuffix: "جنيه مصري",
    sdg: "جنيه سوداني",
    sar: "ريال سعودي",
    feedbacks: "آراء الزبائن",
    services: "خدماتنا",
tshirtSales: "بيع تيشيرتات الفرق السودانية ",
tshirtSalesDesc: "نوفر لك تيشيرتات الأندية والمنتخب  بأعلى جودة.",
euro: "بيع تيشيرتات الفرق العالمية",
europ: "قريباً ستتوفر تيشيرتات الأندية والمنتخبات الأوروبية العالمية.",
kitsForTeams: "بيع بالجملة لأطقم للأندية أو الفرق",
kitsForTeamsDesc: "خدمة تجهيز وطلب أطقم كاملة للفرق - قيد الإطلاق.",
comingSoon: "قريباً",
social: ": تابعنا على مواقع التواصل الاجتماعي",
Egy:"مندوب مصر",
Sdn:"مندوب السودان",
Ksa:"مندوب السعودية",
    currencies: {
      "مصر": "جنيه مصري",
      "السودان": "جنيه سوداني",
      "السعودية": "ريال سعودي",
      "أخرى": "جنيه سوداني"}
  },
  en: {
    home: "Home",
    products: "Products",
    contact: "Contact Us",
    selectCountry: "Select Your Country",
    confirmOrder: "Order Confirmation",
    orderNow: "Order Now",
    namePrint: "Name for Print (optional):",
    numberPrint: "Number for Print (optional):",
    مصر: "Egypt",
    السودان: "Sudan",
    السعودية: "Saudi Arabia",
    أخرى: "Other",
    priceSuffix: "EGP",
    sdg: "SDG",
    sar: "SAR",
    feedbacks: "Feedbacks",
    services: "Our Services",
shirtSales: "Sudanese Teams T-Shirts",
tshirtSalesDesc: "We provide top-quality shirts for local clubs and the national team.",
euro: "International Teams T-Shirts",
europ: "European club and national team shirts will be available soon.",
kitsForTeams: "Wholesale Kits for Clubs or Teams",
kitsForTeamsDesc: "Service for preparing and ordering full team kits – launching soon.",
comingSoon: "Coming Soon",
social:"Follow Us On Social Media:",
Egy:"Egypt representative",
Sdn:"Sudan representative",
Ksa:"KSA representative",
    currencies: {
      "مصر": "EGP",
      "السودان": "SDG",
      "السعودية": "SAR",
      "أخرى": "SDG"
    }
  }
};

const prices = {
  "مصر": {
    "HILAL AWAY 24/25": "350 " ,
    "MERIEKH HOME 24/25": "350",
    "SUDAN AWAY 24/25": "320 ",
    "SUDAN HOME 24/25": "320 ",
    "SUDAN ARMY": "350 "
  },
  "السودان": {
    "HILAL AWAY 24/25": "26,000 ",
    "MERIEKH HOME 24/25": "26,000  ",
    "SUDAN AWAY 24/25": "24,000  ",
    "SUDAN HOME 24/25": "24,000  ",
    "SUDAN ARMY": "26,000  "
  },
  "السعودية": {
    "HILAL AWAY 24/25": "55  ",
    "MERIEKH HOME 24/25": "55  ",
    "SUDAN AWAY 24/25": "50  ",
    "SUDAN HOME 24/25": "50  ",
    "SUDAN ARMY": "55  "
  },
  "أخرى": {
    "HILAL AWAY 24/25": "26,000  ",
    "MERIEKH HOME 24/25": "26,000  ",
    "SUDAN AWAY 24/25": "26,000  ",
    "SUDAN HOME 24/25": "26,000  ",
    "SUDAN ARMY": "26,000  "
  }
};

function App() {
  const [country, setCountry] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [lang, setLang] = useState("ar");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const navigate = useNavigate();

  const t = translations[lang];

  useEffect(() => {
    const savedCountry = localStorage.getItem("country");
    if (!savedCountry) {
      setShowModal(true);
    } else {
      setCountry(savedCountry);
    }
  }, []);

  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
    localStorage.setItem("country", selectedCountry);
    setShowModal(false);
  };

  const getCountryFlag = (country) => {
    switch (country) {
      case "مصر": return "🇪🇬";
      case "السودان": return "🇸🇩";
      case "السعودية": return "🇸🇦";
      default: return "🌍";
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      
      {/* نافذة اختيار الدولة */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl text-center shadow-xl w-80">
            <h2 className="text-xl font-bold mb-4">{t.selectCountry}</h2>
            <div className="grid grid-cols-2 gap-3">
              {["مصر", "السودان", "السعودية", "أخرى"].map((c) => (
                <button
                  key={c}
                  onClick={() => handleSelectCountry(c)}
                  className="bg-red-900 text-white py-2 rounded-lg"
                >
                  {t[c]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* شريط التنقل */}
      <nav className="bg-red-900 text-white px-4 py-3 flex justify-between items-center shadow-md flex-wrap">
  <div className="w-full sm:w-auto flex justify-center sm:justify-start mb-2 sm:mb-0">
    <img src="/images/logo.png" alt="Brand Logo" className="h-16 sm:h-20" />
  </div>

  <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 w-full sm:w-auto">
    <li><a href="#home">{t.home}</a></li>
    <li><a href="#feedbacks">{t.feedbacks}</a></li>
    <li><a href="#services">{t.services}</a></li>
    <li><a href="#products">{t.products}</a></li>
    <li><a href="#contact">{t.contact}</a></li>
  </ul>

  <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end w-full sm:w-auto mt-3 sm:mt-0">
  <button
    onClick={() => setShowModal(true)}
    className="flex items-center gap-2 bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
  >
    <span className="text-xl">{getCountryFlag(country)}</span>
    <span className="text-lg font-semibold">{t[country]}</span>
  </button>
  <button
    onClick={() => setLang(lang === "ar" ? "en" : "ar")}
    className="bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
  >
    {lang === "ar" ? "English" : "العربية"}
  </button>
  <button
    onClick={() => setIsDarkMode(!isDarkMode)}
    className="bg-gray-900 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out hover:scale-105"
  >
    {isDarkMode ? "Light Mode" : "Dark Mode"}
  </button>
</div>

</nav>


      {/* قسم Hero */}
      <HeroSection />

      <WaveDivider />
    
<section className="p-4 bg-gray-100">
  <h3 className="text-2xl mb-4 text-center text-red-600 font-bold" id="feedbacks">{t.feedbacks}</h3>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {[
      { image: "public/images/screenshot1.jpg", alt: "Feedback 1" },
      { image: "public/images/screenshot2.jpg", alt: "Feedback 2" },
      { image: "public/images/screenshot3.jpg", alt: "Feedback 3" },
      { image: "public/images/screenshot4.jpg", alt: "Feedback 4" },
      { image: "public/images/screenshot5.jpg", alt: "Feedback 5" },
      { image: "public/images/screenshot6.jpg", alt: "Feedback 6" },
      { image: "public/images/screenshot7.jpg", alt: "Feedback 7" },
      { image: "public/images/screenshot8.jpg", alt: "Feedback 8" },
      { image: "public/images/screenshot9.jpg", alt: "Feedback 9" },
      { image: "public/images/screenshot10.jpg", alt: "Feedback 10" },
    ].map((item, index) => (
      <div key={index} className="border rounded-lg p-4 shadow bg-white">
        <img src={item.image} alt={item.alt} className="w-full h-auto rounded-lg" />
      </div>
    ))}
  </div>
</section>

<WaveDivider />

<section className="p-4 bg-white">
  <h1 className="text-2xl mb-4 text-center text-red-600 font-bold" id="services">{t.services}</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    <div className="border p-4 rounded shadow">
      <h4 className="text-lg font-semibold mb-2 text-red-600">{t.tshirtSales}</h4>
      <p className="text-red-600">{t.tshirtSalesDesc}</p>
    </div>

    <div className="border p-4 rounded shadow opacity-60 relative">
      <h4 className="text-lg font-semibold mb-2 text-red-600">{t.euro}</h4>
      <p className="text-red-600">{t.europ}</p>
      <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded">
        {t.comingSoon}
      </span>
    </div>

    <div className="border p-4 rounded shadow opacity-60 relative">
      <h4 className="text-lg font-semibold mb-2 text-red-600">{t.kitsForTeams}</h4>
      <p className="text-red-600">{t.kitsForTeamsDesc}</p>
      <span className="absolute top-2 right-2 bg-yellow-400 text-xs px-2 py-1 rounded">
        {t.comingSoon}
      </span>
    </div>
  </div>
</section>

<WaveDivider />

{/* المنتجات */}
<main className="p-4">
  <h3 className="text-2xl mb-4 text-center font-bold" id="products">{t.products}</h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {["HILAL AWAY 24/25", "MERIEKH HOME 24/25", "SUDAN AWAY 24/25", "SUDAN HOME 24/25", "SUDAN ARMY"].map((product, index) => {
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
      const images = Array.from({ length: 5 }).map((_, imgIndex) => `/images/product${index + 1}_img${imgIndex + 1}.jpg`);

      const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      };

      const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
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
            {country && `${prices[country]?.[product]} ${t.currencies[country]}`}
          </p>

          <div className="flex flex-wrap gap-2 mb-2">
            {["M", "L", "XL", "XXL", "XXXL"].map((size) => (
              <span key={size} className="border px-3 py-1 rounded bg-gray-100 text-gray-800">
                {size}
              </span>
            ))}
          </div>

          <a
            href={`https://wa.me/${country === "السودان"
              ? "249909377787"
              : country === "السعودية"
              ? "966532495905"
              : "201550343549"
            }?text=${encodeURIComponent(
              `الطلب بإسم:\n من دولة:\n  عدد التي شيرتات :\nنوع التي شيرت :  \nالمقاس المطلوب: \nالعنوان بالتفصيل:\nرقم المستلم:\nالاسم والرقم المطلوب طباعتهم:`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-2 px-4 py-2 bg-green-600 text-white rounded flex items-center justify-center gap-2"
          >
            <img src="public/images/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
            {t.orderNow}
          </a>
        </div>
      );
    })}
  </div>
</main>






      
<footer className="bg-red-900 text-white py-6">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="flex flex-col sm:flex-row justify-between">
      
      {/* روابط السوشيال ميديا */}
      <div className="mb-4 sm:mb-0">
        <h4 className="text-lg font-semibold mb-2" id="contact">{t.social}</h4>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61568073047447" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <i className="fab fa-facebook-f fa-3x"></i> {/* أيقونة فيسبوك */}
          </a>
          <a href="https://x.com/sdnsport1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
           <i className="fab fa-twitter fa-3x"></i> {/* أيقونة X (يمكنك اختيار أي أيقونة أخرى متاحة) */}
          </a>
          <a href="https://www.instagram.com/sdnsport1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
            <i className="fab fa-instagram fa-3x"></i> {/* أيقونة انستجرام */}
          </a>
          <a href="https://www.tiktok.com/@sdn.sport1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500">
           <i className="fab fa-tiktok fa-3x"></i> {/* أيقونة لينكدإن */}
          </a>
        </div>
      </div>

      {/* أرقام التواصل */}
      <div className="mb-4 sm:mb-0">
            <h4 className="text-lg font-semibold mb-2">{t.contact} </h4>
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
                  📞 01550343549 {t.Egy}
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
                  📞 0909377787 {t.Sdn}
                </a>
              </li>
              {/* مندوب السعودية */}
              <li>
                <a
                  href="https://wa.me/966532495905" // استبدل هذا الرقم برقم المندوب السعودي
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
                  📞 0532495905 {t.Ksa}  
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
    
    </div>
  );
}

export default App;
