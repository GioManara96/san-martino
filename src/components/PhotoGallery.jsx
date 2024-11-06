import React, { useState } from "react";
import { imagesGallery } from "../data/imagesGallery";

export default function PhotoGallery({ status, onClose }) {
  const buttonCaptions = ["tutte", "interno", "esterno", "altro"];
  const [activeFilter, setActiveFilter] = useState("tutte");
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  // chiudi galleria
  function handleGallery() {
    onClose(false);
  }

  // seleziona filtro
  function handleFilterClick(filter) {
    setActiveFilter(filter);
  }

  // gestisci zoom immagine
  function handleZoomImage(index) {
    setZoomedImageIndex(index === zoomedImageIndex ? null : index);
  }

  return (
    <div className={`${status ? "block" : "hidden"} w-full h-full bg-black text-white overflow-auto fixed inset-0 z-50 p-5`}>
      <button onClick={handleGallery} type="button" className="rounded-full text-white border border-white w-fit py-1 px-3 hover:bg-white hover:text-black">
        &times;
      </button>
      <div className="my-7">
        <h2 className="px-5 md:px-10 lg:px-16 text-xl md:text-3xl">Photo Gallery</h2>
        <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
          <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
            {buttonCaptions.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterClick(filter)}
                type="button"
                className={`focus:outline-none border-2 border-purple-600 hover:bg-purple-700 font-medium rounded-lg text-sm px-5 text-white py-2.5 mb-2 capitalize ${
                  activeFilter === filter ? "bg-purple-600" : " "
                }`}>
                {filter}
              </button>
            ))}
            {/* filtered cards display */}
            <div className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
              {imagesGallery.map((item, index) => (
                <div
                  key={index}
                  className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 ${
                    activeFilter === "tutte" || activeFilter === item.category ? "block" : "hidden"
                  }`}>
                  {zoomedImageIndex === index ? (
                    <div className="relative lightbox show" onClick={() => handleZoomImage(index)}>
                      <img src={item.src} alt={item.name} className="w-full h-full object-contain" loading="lazy" />
                    </div>
                  ) : (
                    <div className="rounded-t-lg w-full h-[250px] overflow-hidden" onClick={() => handleZoomImage(index)}>
                      <img src={item.src} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
