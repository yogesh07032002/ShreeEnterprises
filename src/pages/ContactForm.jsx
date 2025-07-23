import React, { useRef } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_rgz6jkc", "template_wejofpj", form.current, {
        publicKey: "qlI3-cRNNE1A0p0ev",
      })
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092334542-e04f50c1c1d0?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">
            We’re here to answer your questions and help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-green-600">Contact Information</h2>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-green-600 text-2xl mt-1" />
            <p>
              Second floor, Flat No.: B202<br />
              Nabhraj Trilok Heights, <br />
              Gadiya Vihar Road, Near Old Podar School, <br />
              Chhatrapati Sambhajinagar,<br />
              Maharashtra, India - 431005.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <FaPhone className="text-green-600 text-2xl mt-1" />
            <p>+91 96737 12809</p>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-green-600 text-2xl mt-1" />
            <p>shreenterprises2030@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mt-6">Business Hours</h3>
            <p>Monday – Saturday: 9:00 AM – 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-6">Send Us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-64">
        <iframe
          title="Map Location"
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.036148881274!2d75.343313914158!3d19.90183598662752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba2d30f44c79b%3A0x6bfa7c403a0b1f0b!2sAurangabad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623244039084!5m2!1sen!2sin"
        ></iframe>
      </section>
    </div>
  );
};
