import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function ContactInfo() {
  // la topbar compare solo dopo aver scrollato di almeno 500px
  window.addEventListener("scroll", () => {
    const backToTopButton = document.querySelector("#showContact");

    if (window.scrollY > 100) {
      backToTopButton.classList.remove("hidden");
    } else {
      backToTopButton.classList.add("hidden");
    }
  });

  return (
    <div
      className={`${window.scrollY === 0 && "hidden"} md:hidden container mx-auto fixed top-0 w-full bg-black bg-opacity-80 z-50 px-10 py-3 text-black flex justify-between border-b border-white`}
      id="showContact">
      <a
        href="tel:+390123456789"
        className="btn px-3 py-[2px] max-w-[120px] flex items-center bg-white border border-black text-black rounded-lg hover:text-white hover:bg-black hover:border-white"
        title="chiama per info">
        <FaPhone className="inline me-2" /> Chiamaci
      </a>
      <a
        href="mailto:user@example.com"
        className="btn px-3 py-[2px] max-w-[120px] flex items-center bg-white border border-black text-black rounded-lg hover:text-white hover:bg-black hover:border-white"
        title="scrivi per info">
        <FaEnvelope className="inline me-2" /> Scrivici
      </a>
    </div>
  );
}
