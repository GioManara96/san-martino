import { PiMountainsFill } from "react-icons/pi";
import { FaSkiing, FaWifi, FaBusAlt } from "react-icons/fa";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaPeopleRoof, FaPersonWalking } from "react-icons/fa6";

export default function Services() {
  return (
    <div className="my-10 lg:my-20">
      <p className="mb-3 text-sm">Comodità e servizi a tua disposizione</p>
      <h2 className="text-2xl lg:text-4xl font-bold" id="dettagli">
        Servizi
      </h2>
      <div className="my-7 grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0">
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-5 border border-gray-600">
          <FaSkiing className="text-xl" />
          <p className="text-white">&lt; 400m dalle piste da sci</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-4 border border-gray-600">
          <PiMountainsFill />
          <p className="text-white">Vista montagne</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-4 border border-gray-600">
          <FaWifi className="text-xl" />
          <p className="text-white">Wifi gratuito</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-5 border border-gray-600">
          <BiSolidCarGarage className="text-xl" />
          <p className="text-white">Posto auto coperto</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-4 border border-gray-600">
          <FaPeopleRoof className="text-xl" />
          <p className="text-white">Sala comune</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-4 border border-gray-600">
          <FaPersonWalking className="text-xl" />
          <p className="text-white">700m dal centro</p>
        </div>
        <div className="p-5 col-span-2 lg:col-span-1 bg-black flex flex-col justify-center gap-4 border border-gray-600">
          <FaBusAlt className="text-xl" />
          <p className="text-white">Fermata skibus vicinissima</p>
        </div>
      </div>
    </div>
  );
}
