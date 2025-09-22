"use client";
import { useState } from "react";
import Image from "next/image";
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Enquiry Sent Successfully ✅");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="bg-[#f5f5de]">
      {/* Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-black">
        <Image
          src="/images/attr/9.png"
          alt="Contact Banner"
          width={100}
          height={100}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />

        <h1 className="relative text-4xl font-bold text-black">Contact Us</h1>
      </section>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid md:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <h2 className="text-2xl font-bold  text-black mb-4">Hotel Booking Enquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border text-black rounded-lg p-3"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border text-black rounded-lg p-3"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border  text-black rounded-lg p-3"
            />
            <textarea
              name="message"
              placeholder="Your Enquiry / Booking Details"
              value={formData.message}
              onChange={handleChange}
              className="w-full border text-black rounded-lg p-3"></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
              Send Enquiry
            </button>
          </form>
          {status && <p className="mt-3 text-sm text-gray-700">{status}</p>}
        </div>

        {/* Contact Info + Map */}
        <div className="text-black">
          <h2 className="text-2xl font-bold  mb-4">Contact Details</h2>
          <p className="mb-2">📞 +91 946 106 5214</p>
          <p className="mb-2">✉️ thartribehostel@gmail.com</p>
          <p className="mb-4">
            🏨 Fort Rd, Dhibba Para, Manak Chowk, Amar Sagar Pol, Jaisalmer,
            Rajasthan 345001
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7115.5068576848635!2d70.9112752!3d26.9113194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3947bd502e390ab5%3A0x36457cb3b799ce93!2sThar%20Tribe%20Hostel%20Jaisalmer!5e0!3m2!1sen!2sin!4v1758559363866!5m2!1sen!2sin"
            width="600"
            height="450"
            loading="lazy"></iframe>
        </div>
      </section>
    </div>
  );
}
