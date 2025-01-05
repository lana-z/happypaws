"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

// Initialize EmailJS
emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const reviews = [
  {
    text: "Livi pet-sat for us! She's responsible, caring, and always on time. We couldn't be happier with her service!",
    author: "– Susan",
    icon: "🐕"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "– Lorem I.",
    icon: "🦮"
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    author: "– Ipsum D.",
    icon: "🐾"
  }
];

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [formData, setFormData] = useState({
    ownerName: "",
    phone: "",
    address: "",
    petName: "",
    typeOfPet: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: "" });

  const headingOptions = [
    "Woof! Need a Dog Walker?",
    "Purrfect! Need a Cat Companion?",
    "Hoppin'! Need a Rabbit Wrangler?",
    "Chirp! Need a Bird Buddy?",
    "Glub! Need a Fish Feeder?",
    "Egg-citing! Need a Coop Keeper?"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          ownerName: formData.ownerName,
          phone: formData.phone,
          address: formData.address,
          petName: formData.petName,
          typeOfPet: formData.typeOfPet,
          message: formData.message || "No message provided",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        success: true,
        message: "Thanks! I'll call you soon to talk about your request! 🐾",
      });
      setFormData({ 
        ownerName: "", 
        phone: "", 
        address: "", 
        petName: "", 
        typeOfPet: "", 
        message: "" 
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeadingIndex((prev) => (prev + 1) % headingOptions.length);
    }, 4000); // Change text every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section section bg-primary/10">
        <div className="container">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-6 md:w-1/2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-4xl">🐾</span>
                <h2 className="text-2xl font-bubblegum">Happy Paws</h2>
              </div>
              <div className="relative h-[70px] overflow-hidden flex items-center">
                <AnimatePresence mode="wait">
                  <motion.h1
                    key={currentHeadingIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-4xl font-bold whitespace-nowrap text-left"
                  >
                    {headingOptions[currentHeadingIndex]}
                  </motion.h1>
                </AnimatePresence>
              </div>
              <p className="text-lg">
                Hi! I'm Livi, your friendly neighborhood dog walker and pet sitter in Greenbrier, 
                Charlottesville. I'll keep your furry and feathered friends happy and healthy while you're away! 🐾
              </p>
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
              >
                Book a Visit 🦮
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/images/livi-hero.jpg"
                  alt="Livi with a happy dog"
                  width={400}
                  height={533}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg rotate-2">
                  <p className="text-primary font-bold">Trusted by Greenbrier families.</p>
                  <p className="text-sm text-center">"I love dogs!" – Livi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <h2 className="mb-8 text-center">Meet Your Pet's Friend</h2>
          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg">
              Hey there! I'm Livi, a 13-year-old animal lover in the Greenbrier 
              neighborhood. When I'm not in school, I'm making sure your pets get their 
              daily dose of fun, exercise, and love! Whether it's walks for dogs, 
              playtime with cats, or caring for other furry and feathered friends, I'm here to help! 🎈
            </p>
            <div className="mt-12">
              <h3 className="mb-6">What Your Pets Get:</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="card">
                  <div className="text-3xl mb-2">🦮</div>
                  <h4 className="font-bold mb-2">Check-ins</h4>
                  <p>30-minutes of walks, playtime, feeding, care!</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">📱</div>
                  <h4 className="font-bold mb-2">Photo Updates</h4>
                  <p>See how much fun your pet is having!</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">⏰</div>
                  <h4 className="font-bold mb-2">Flexible Times</h4>
                  <p>After school and weekend availability.</p>
                </div>
                <div className="card">
                  <div className="text-3xl mb-2">💝</div>
                  <h4 className="font-bold mb-2">Lots of Love</h4>
                  <p>Treats and belly rubs included!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="reviews-section section">
        <div className="container">
          <h2 className="mb-12 text-center text-primary">Pawsome Reviews! 🐾</h2>
          <div className="relative max-w-2xl mx-auto">
            <button 
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 text-4xl text-primary hover:scale-110 transition-transform"
              aria-label="Previous review"
            >
              ←
            </button>
            
            <div className="card overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{reviews[currentReview].icon}</div>
                <div>
                  <p className="italic text-lg">
                    "{reviews[currentReview].text}"
                  </p>
                  <p className="mt-4 font-semibold text-primary">
                    {reviews[currentReview].author}
                  </p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 text-4xl text-primary hover:scale-110 transition-transform"
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="mb-8 text-center">Schedule Pet Care 🐾</h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 p-8">
            <div>
              <label htmlFor="ownerName" className="block mb-2 font-medium">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="434-555-0123"
              />
              <p className="mt-1 text-sm text-gray-600">
                I'll call you to set up the walk! 📞
              </p>
            </div>

            <div>
              <label htmlFor="address" className="block mb-2 font-medium">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="123 Greenbrier St"
              />
            </div>

            <div>
              <label htmlFor="petName" className="block mb-2 font-medium">
                Pet's Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Max"
              />
            </div>

            <div>
              <label htmlFor="typeOfPet" className="block mb-2 font-medium">
                Type of Pet <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="typeOfPet"
                name="typeOfPet"
                value={formData.typeOfPet}
                onChange={handleInputChange}
                required
                className="input-field"
                placeholder="Dog, Cat, etc."
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="input-field"
                placeholder="Any special instructions or questions?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Request 📨"}
            </button>

            {submitStatus.message && (
              <div
                className={`p-4 rounded-lg text-center ${
                  submitStatus.success
                    ? "bg-[#e0ecc0] text-black"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section py-8 text-center">
        <p className="text-sm">
          2025 Livi's Dog Walking Service • Greenbrier, Charlottesville, VA 🐾
        </p>
      </footer>
    </main>
  );
}
