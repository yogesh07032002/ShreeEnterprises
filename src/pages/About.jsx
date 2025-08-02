import React from "react";

export const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        About Shree Enterprises
      </h1>

      {/* Company Overview */}
      <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        Shree Enterprises is your one-stop shop for premium dehydrated vegetables. Based in Aurangabad, Maharashtra,
        we proudly supply high-quality dehydrated products across India. With a commitment to quality, hygiene, and
        long shelf-life, we help elevate culinary experiences across households and industries.
      </p>

      {/* Why Choose Us */}
      <section className="grid md:grid-cols-2 gap-10 mt-12">
        <div>
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>✅ Extensive Product Range</li>
            <li>✅ Year-Round Availability</li>
            <li>✅ Long Shelf Life & Freshness</li>
            <li>✅ Hygienic & Safe Packaging</li>
            <li>✅ Good Rehydration Ratio</li>
            <li>✅ Trusted by Restaurants, Exporters, and Food Units</li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold text-green-800 mb-4">Company Information</h3>
          <p><strong>Business Name:</strong> Shree Enterprises</p>
          <p><strong>Location:</strong> Chhatrapati Sambhajinagar, Maharashtra, India - 431005</p>
          <p><strong>Phone:</strong> <a href="tel:+919673712809" className="text-green-600">+91 96737 12809</a></p>
          <p><strong>Email:</strong> <a href="mailto:contact@shreeenterprises.com" className="text-green-600">shreenterprises2030@gmail.com</a></p>
          <p><strong>Website:</strong> <a href="https://www.shreeenterprises.in" className="text-green-600">www.shreenterprises.com</a></p>
        </div>
      </section>

      {/* Our Values */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Our Core Values</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          {["Quality First", "Customer Focus", "Sustainability", "Integrity"].map((val, idx) => (
            <div key={idx} className="bg-green-50 p-4 rounded shadow font-semibold text-green-800">
              {val}
            </div>
          ))}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Meet Our Team</h2>
        <p className="mb-6 text-gray-700 max-w-xl mx-auto">
          Behind every great product is a passionate team. From procurement to packaging, our team ensures you get the best.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
          {[ 
            { name: "Mr. Yogesh Deshmukh", role: "Proprietorship" },
            { name: "Mr. Suryakant Patil", role: "Superintendent" },
          ].map((member, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow text-green-800">
              <h4 className="font-bold text-lg">{member.name}</h4>
              <p className="text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-16 bg-gray-50 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-green-700 mb-8">What Our Clients Say</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left max-w-5xl mx-auto">
          {[ 
            {
              quote: "Shree Enterprises consistently delivers excellent quality. The dehydrated garlic and onions have great flavor!",
              client: "– Chef’s Choice Pvt Ltd",
            },
            {
              quote: "We've streamlined our food production thanks to their reliable supply and long shelf-life products.",
              client: "– Maharashtra Food Export Co.",
            },
            {
              quote: "Very hygienic packaging and prompt service. Great supplier!",
              client: "– Hotel Group, Pune",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white p-5 rounded shadow text-sm">
              <p>"{item.quote}"</p>
              <p className="mt-3 font-semibold text-green-700">{item.client}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="mt-16 text-center px-4">
        <h2 className="text-2xl font-bold text-green-700 mb-4">Sustainability Commitment</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          At Shree Enterprises, we follow eco-friendly drying methods that conserve energy and minimize waste.
          Our sourcing ensures minimal food spoilage and maximum utilization of natural resources.
        </p>
      </section>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-green-700 mb-4">Partner With Us</h3>
        <p className="mb-6 text-gray-700">
          Looking for a reliable supplier of dehydrated vegetables? Let's talk.
        </p>
        <a
          href="/contact"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};
