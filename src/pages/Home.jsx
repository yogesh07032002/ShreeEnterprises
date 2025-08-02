import React from "react";
import {
  FaBoxes,
  FaSyncAlt,
  FaClock,
  FaTint,
  FaLeaf,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

// ✅ Import background and product images
import backgroundImage from "../assets/img9.png";
import Product1 from "../assets/img1.jpg";
import Product2 from "../assets/img2.jpg";
import Product3 from "../assets/img3.jpg";
import Product4 from "../assets/img4.jpg";
import Product5 from "../assets/img5.jpg";
import Product6 from "../assets/img6.jpg";
import Product7 from "../assets/img7.jpg";
import Product8 from "../assets/img8.jpg";

export const Home = () => {
  const products = [
    { img: Product1, name: "1. Garlic Powder" },
    { img: Product2, name: "2. Dehydrated White Onion Flakes" },
    { img: Product3, name: "3. Dehydrated Garlic Flake" },
    { img: Product4, name: "4. Dehydrated Garlic Flakes" },
    { img: Product5, name: "5. Fresh Fried Onion" },
    { img: Product6, name: "6. Green Chilli Flakes" },
    { img: Product7, name: "7. Tomato Flakes" },
    { img: Product8, name: "8. Green Chilli Powder" },
  ];

  const features = [
    { icon: <FaBoxes />, label: "Extensive Product Range" },
    { icon: <FaSyncAlt />, label: "Year-Round Availability" },
    { icon: <FaClock />, label: "Long Shelf Life" },
    { icon: <FaTint />, label: "Excellent Rehydration" },
    { icon: <FaLeaf />, label: "Freshness Preserved" },
    { icon: <FaShieldAlt />, label: "Hygienic Packaging" },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-white bg-center bg-fill"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0  bg-opacity-80 backdrop-sm"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Elevate Your Culinary Experience
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-300 mb-6">
            SHREE Enterprises - Dehydrated Vegetable Experts
          </h2>
          <p className="text-lg font-semibold sm:text-xl">
            📞 +91 96737 12809 | ✉️ shreenterprises2030@gmail.com <br />
            🌐 www.shreeenterprises.com
          </p>
        </div>
      </section>

      {/* MARQUEE TAGLINE */}
      <div className="bg-yellow-100 py-2 shadow-inner">
        <marquee behavior="scroll" direction="left" scrollamount="6" className="text-green-800 font-semibold text-lg">
"Shree Enterprises delivers Fresh Fried Onions, Green Chilli flakes, Dehydrated Garlic Flakes, Tomato flakes, Garlic Powder & Green Chilli Powder — with the hygiene and shelf life your business deserves."          
        </marquee>
      </div>

      {/* MISSION & VISION */}
      <section className="py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission & Vision</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Our mission is to empower food businesses with top-grade dehydrated ingredients that save time, reduce waste, and elevate quality.
          <br /><br />
          Our vision is to become the most trusted supplier of dehydrated vegetables in India and beyond.
        </p>
      </section>

      {/* FEATURES */}
      <section className="py-14 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Why Choose Dehydrated Products?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="text-3xl text-green-600 mb-4">{item.icon}</div>
              <p className="text-green-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-14 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-8">Our Top Products</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col items-center transition duration-300"
            >
              <img
                src={product.img}
                alt={product.name}
                className="rounded-xl w-full h-48 object-cover mb-4 transition-transform hover:scale-105 duration-300"
              />
              <p className="font-semibold text-green-800 text-center">{product.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="py-16 bg-green-50 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-8">Certifications & Standards</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["FSSAI Certified", "ISO 22000 Compliant", "100% Natural Ingredients"].map((cert, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow text-green-800 font-medium flex items-center justify-center gap-3 text-lg"
            >
              <FaAward className="text-2xl text-yellow-500" />
              {cert}
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-2xl font-bold text-green-700 mb-6">Partner With Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          Whether you're a food brand, spice company, or HORECA buyer, Shree Enterprises offers reliability, quality, and long-term collaboration.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-700 hover:bg-green-800 text-white px-6 py-3 font-semibold rounded-full transition"
        >
          Become a Partner
        </a>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-green-200 py-12 px-6 text-center">
        <h2 className="text-xl font-bold text-green-700 mb-4">Stay Updated!</h2>
        <p className="mb-4">Subscribe to get our latest product updates, bulk offers, and recipes.</p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded w-full sm:w-auto text-gray-700 focus:outline-green-600"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded"
          >
            Subscribe
          </button>
        </form>
      </section>

      {/* WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919673712809"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.24 11.51a5.95 5.95 0 01-5.36 5.36L9 21l-2.1-.7a9 9 0 1116.2-6.72l-1.9 3.93z"
          />
        </svg>
        Chat
      </a>
    </div>
  );
};
