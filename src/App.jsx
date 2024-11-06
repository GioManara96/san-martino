import React, { useState } from "react";
import PhotoGallery from "./components/PhotoGallery";
import ApartmentDetails from "./components/ApartmentDetails";
import Sidebar from "./components/Sidebar";
import Services from "./components/Services";
import BackToTop from "./components/BackToTop";
import Carousel from "./components/Carousel";
import Location from "./components/Location";
import Footer from "./components/Footer";
import ContactInfo from "./components/ContactInfo";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <ContactInfo />
      <PhotoGallery status={isOpen} onClose={setIsOpen} />
      <div className="absolute left-0 top-0 -z-10 h-screen w-full overflow-hidden">
        <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center-bottom w-full transition-[background,height] max-h-[861px] h-[40vh] after:absolute after:inset-0 after:!block after:h-full after:w-full after:bg-gradient-to-b after:from-black/50 after:from-[75%] after:to-black after:to-[90%] after:content-[''] lg:h-screen lg:after:from-[60%] lg:after:to-[80%]"></div>
      </div>
      <div className="container mx-auto py-20 lg:px-4 hidden lg:block">
        <div className="h-[35vh] max-h-[280px] lg:h-[68vh] lg:max-h-[550px] xl:container mx-auto">
          <div className="grid gap-6 lg:grid-cols-[1fr_385px] max-h-[550px] w-full lg:h-[68vh]">
            <div className="relative row-span-2 overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
              <img src="/san-martino/images/foto_1.jpg" alt="Residence Europa" className="rounded-xl h-full object-cover shadow-lg transition-all hover:scale-105"  loading="lazy" />
            </div>
            <div className="relative overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
              <img
                src="/san-martino/images/foto_2.jpg"
                alt="Pale d San Martino tramonto"
                className="rounded-xl w-full h-full object-cover shadow-lg absolute transition-all hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
              <img
                src="/san-martino/images/foto_3.jpg"
                alt="Foto bambini scivolo"
                className="rounded-xl w-full h-full object-cover shadow-lg absolute transition-all hover:scale-105"
                loading="lazy"
              />
              <div className="px-3 py-1 bg-white text-black rounded-lg font-semibold absolute bottom-3 left-1/2 w-fit -translate-x-1/2">Mostra galleria</div>
            </div>
          </div>
        </div>
      </div>
      <main>
        <div className="lg:px-4 container mx-auto flex flex-wrap">
          <div className="main-content md:pe-20 container mx-auto py-5 px-5 md:px-0 col-span-4 md:col-span-3">
            <ApartmentDetails />
            <Services />
          </div>
          <Sidebar />
        </div>

        <div className="relative mx-auto p-5 lg:px-4 my-10" id="galleria">
          <div className="absolute left-0 top-0 -z-10 h-screen w-full overflow-hidden">
            <div className="bg-sunset-pattern bg-no-repeat bg-cover bg-center w-full transition-[background,height] max-h-[861px] h-[100vh] after:absolute after:inset-0 after:!block after:h-full after:w-full after:bg-gradient-to-b after:from-black/50 after:from-[75%] after:to-black after:to-[90%] after:content-[''] lg:h-screen lg:after:from-[60%] lg:after:to-[80%]"></div>
          </div>
          <div className="container p-5 lg:px-4 mx-auto hidden lg:block">
            <p className="mb-3 text-sm">Guarda con i tuoi occhi</p>
            <h2 className="text-2xl md:text-4xl font-bold">Galleria</h2>
            <div className="grid gap-6 lg:grid-cols-[1fr_385px] max-h-[550px] w-full lg:h-[68vh] mt-10">
              <div className="relative row-span-2 overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
                <img src="/san-martino/images/altro/IMG_20241101_112712-min.webp" alt="Vista pale da Punta Ces" className="rounded-xl h-full object-cover shadow-lg transition-all hover:scale-105"  loading="lazy" />
              </div>
              <div className="relative overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
                <img
                  src="/san-martino/images/altro/slitta_cavallo.jpg"
                  alt="Slitta cavallo"
                  className="rounded-xl w-full h-full object-cover shadow-lg absolute transition-all hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl" role="button" onClick={() => setIsOpen(true)}>
                <img
                  src="/san-martino/images/altro/casa_innevata.jpg"
                  alt="Casa innevata"
                  className="rounded-xl w-full h-full object-cover shadow-lg absolute transition-all hover:scale-105"
                  loading="lazy"
                />
                <div className="px-3 py-1 bg-white text-black rounded-lg font-semibold absolute bottom-3 left-1/2 w-fit -translate-x-1/2">Mostra galleria</div>
              </div>
            </div>
          </div>
          <Carousel onOpenGallery={setIsOpen}/>
        </div>

        <div className="lg:px-4 container mx-auto flex flex-wrap">
          <div className="main-content md:pe-20 container mx-auto">
            <Location />
          </div>
          <Sidebar />
        </div>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
}
