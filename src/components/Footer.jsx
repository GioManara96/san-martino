import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-white px-4">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <p className="text-sm">
          &copy;
          <span className="font-bold">Copyrights</span> {currentYear}
        </p>
        <p className="text-sm">Tutti i diritti riservati</p>
      </div>
    </footer>
  );
}

