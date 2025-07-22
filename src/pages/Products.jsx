import React from "react";
import Product1 from "../assets/img1.jpg";
import Product2 from "../assets/img2.jpg";
import Product3 from "../assets/img3.jpg";
import Product4 from "../assets/img4.jpg";
import Product5 from "../assets/img5.jpg";
import Product6 from "../assets/img6.jpg";
import Product7 from "../assets/img7.jpg";
import Product8 from "../assets/img8.jpg";


const products = [
  { img: Product1, title: "Garlic Powder" },
  { img: Product2, title: "Dehydrated White Onion Flakes" },
  { img: Product3, title: "Dehydrated Garlic Flake" },
  { img: Product4, title: "Dehydrated Garlic Flakes" },
  { img: Product5, title: "Fresh Fried Onion" },
  { img: Product6, title: "Green Chilli Flakes" },
  { img: Product7, title: "Tomato Flakes" },
  { img: Product8, title: "Green Chilli Powder" },

];

const offerings = [
  {
    category: "Onion",
    items: [
      "White Onion Flakes",
      "Red Onion Flakes",
      "Fresh Fried Onion",
    ],
  },
  {
    category: "Red Chilies",
    items: ["Red Chilli Flakes", "Red Chilli Powder"],
  },
  {
    category: "Garlic",
    items: ["Garlic Flakes", "Garlic Powder"],
  },
  {
    category: "Turmeric",
    items: ["Turmeric Fingers", "Turmeric Powder"],
  },
  {
    category: "Green Chilies",
    items: ["Green Chilli Flakes", "Green Chilli Powder"],
  },
  {
    category: "Other Vegetables",
    items: ["Tomato Flakes"],
  },
];

export const Products = () => {
  const whatsappNumber = "919673712809";
  const generateWhatsAppLink = (productName) =>
    `https://wa.me/${whatsappNumber}?text=Hi%20Shree%20Enterprises,%20I'm%20interested%20in%20buying%20*${encodeURIComponent(
      productName
    )}*.%20Please%20share%20details.`;

  return (
    <div className="bg-white text-gray-800 py-12 px-4 max-w-7xl mx-auto">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-green-700 mb-10">
        Our Product 
      </h1>

      {/* Product Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-green-800 mb-3">
              {product.title}
            </h3>
            <a
              href={generateWhatsAppLink(product.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-600 text-white py-2 rounded-full hover:bg-green-700 transition"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>

      {/* Quote Button */}
      <div className="mt-16 text-center">
        <p className="text-lg mb-4">
          Looking for bulk orders or customized packaging?
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Request a Quote
        </a>
      </div>

      {/* What We Offer Section */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-10">
          What We Offer
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((group, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                {group.category}
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {group.items.map((item, idx) => (
                  <li key={idx}>✅ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-green-700 mb-2">
            Versatility Unbound
          </h3>
          <p className="text-gray-700 mb-1">
            Our dehydrated products are ideal for food manufacturers, HORECA businesses, and retailers.
          </p>
          <p className="text-green-700 font-medium mt-4">
            ✔ Fresh and Hygienic Packaging Guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};
