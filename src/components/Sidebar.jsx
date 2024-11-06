import { FaEnvelope, FaPhone } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside className="hidden md:block sidebar">
      <div className="sticky top-[5.5rem]">
        <div className="relative z-10 rounded-xl bg-[#0e0e0e] p-5 backdrop-blur-2xl mb-3 shadow-lg">
        <h3 className="font-semibold mb-5 text-2xl">Contatti</h3>
        <p className="mb-2 text-sm">Telefono</p>
        <a href="tel:+390123456789" className="btn px-3 py-[2px] max-w-[120px] flex items-center bg-white border border-black text-black rounded-lg hover:text-white hover:bg-black hover:border-white" title="chiama per info">
          <FaPhone className="inline me-2" /> Chiamaci
        </a>
        <p className="mt-7 mb-2 text-sm">Email</p>
        <a href="mailto:user@example.com" className="btn px-3 py-[2px] max-w-[120px] flex items-center bg-white border border-black text-black rounded-lg hover:text-white hover:bg-black hover:border-white" title="scrivi per info">
          <FaEnvelope className="inline me-2" /> Scrivici
        </a>
        </div>
      </div>
    </aside>
  );
}
