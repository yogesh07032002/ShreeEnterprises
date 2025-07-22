import React from "react";
import {
  FaBoxes,
  FaSyncAlt,
  FaClock,
  FaTint,
  FaLeaf,
  FaShieldAlt,
  FaHandHoldingHeart,
  FaThumbsUp,
} from "react-icons/fa";

export const Choose = () => {
  const features = [
    {
      icon: <FaBoxes />,
      title: "Extensive Product Range",
      desc: "We offer a wide variety of dehydrated vegetables to cater to every business need.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Year-Round Availability",
      desc: "Consistent inventory throughout the year to support your supply chain.",
    },
    {
      icon: <FaClock />,
      title: "Long Shelf Life",
      desc: "Our products are processed and packed to retain freshness for months.",
    },
    {
      icon: <FaTint />,
      title: "Excellent Rehydration Ratio",
      desc: "Retains texture and taste upon rehydration — perfect for culinary applications.",
    },
    {
      icon: <FaLeaf />,
      title: "Natural Freshness Preserved",
      desc: "Gentle drying methods ensure nutrients and flavors remain intact.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Hygienic Packaging",
      desc: "Packed in clean, food-grade facilities to meet export standards.",
    },
    {
      icon: <FaHandHoldingHeart />,
      title: "Customer-Centric Approach",
      desc: "We build long-term relationships through reliability and service.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Trusted by Industry Leaders",
      desc: "Serving food processors, exporters, and hospitality chains across India.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="h-[50vh] bg-cover bg-center relative flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1577985732820-6489f61f92c6?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-2">Why Choose Shree Enterprises?</h1>
          <p className="text-lg max-w-xl mx-auto">
            Quality, commitment, and customer satisfaction at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
            Our Strengths
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here’s what makes us the preferred choice for dehydrated vegetable supplies.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-xl shadow hover:shadow-lg text-center transition duration-300"
            >
              <div className="text-3xl text-green-600 mb-4 mx-auto">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-500 text-white py-12 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Discover why leading businesses trust Shree Enterprises for quality and consistency.
        </p>
        <a
          href="/contact"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Contact Us Today
        </a>
      </section>
    </div>
  );
};

