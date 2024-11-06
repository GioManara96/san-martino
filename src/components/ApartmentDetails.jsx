import React from "react";
import { IoBedOutline } from "react-icons/io5";
import { FaShower } from "react-icons/fa6";
import { MdOutlineGarage } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

export default function ApartmentDetails() {
  return (
    <div>
      <p className="mb-3 text-sm">
        San Martino di Castrozza, Fiera di Primiero (<span className="font-lora">Tn</span>)
      </p>
      <h1 className="text-2xl md:text-4xl font-bold" id="dettagli">
        Residence Europa, via Passo Rolle 10
      </h1>
      <div className="my-5">
        <ul className="grid gap-y-3 grid-cols-4 flex-wrap md:w-fit">
          <li className="col-span-2 md:col-span-1 flex items-center">
            <IoBedOutline className="text-2xl me-2" /> <span className="font-semibold text-white">3 letti</span>
          </li>
          <li className="col-span-2 md:col-span-1 flex items-center">
            <FaShower className="text-2xl me-2" /> <span className="font-semibold text-white">1 bagno</span>
          </li>
          <li className="col-span-2 md:col-span-1 flex items-center">
            <MdOutlineGarage className="text-2xl me-2" /> <span className="font-semibold text-white">1 posto auto</span>
          </li>
          <li className="col-span-2 md:col-span-1 flex items-center">
            <BsPeople className="text-2xl me-2" /> <span className="font-semibold text-white">3 persone max</span>
          </li>
        </ul>
      </div>
      <div className="hidden md:block">
        <p className="mt-5 mb-3">
          Benvenuti nel nostro accogliente monolocale al Residence Europa, situato in via Passo Rolle 10, a pochi passi dal cuore di San Martino di Castrozza.
          Immerso nella bellezza naturale delle Dolomiti e ai piedi delle maestose Pale di San Martino, è la scelta ideale per una fuga indimenticabile.
        </p>
        <p>
          A soli 700 metri dal centro del paese e a 400 metri dall'ovovia Tognola, avrai facile accesso alle piste da sci, ai sentieri e a tutte le attrazioni
          locali. Perfetto per piccole famiglie, il monolocale può ospitare fino a 3 persone, con tre comodi divani letto singoli. La cucina è dotata di tutti i
          principali elettrodomestici, inclusi microonde e lavastoviglie, per rendere il tuo soggiorno il più confortevole possibile.
        </p>
        <p className="my-3">
          Goditi l'atmosfera alpina mentre ti rilassi dopo una giornata di avventure, tra sci, escursioni e passeggiate nei boschi. Prenota ora la tua
          esperienza unica tra le montagne!
        </p>
      </div>
      <div className="block md:hidden">
        <p>
          Benvenuto nel nostro accogliente monolocale al Residence Europa, a pochi passi dal centro e dall’ovovia Tognola. Immerso nella bellezza delle
          Dolomiti, è ideale per piccole famiglie e gruppi ristretti di amici, con spazio fino a 3 persone, una cucina con lavastoviglie, un bagno e un posto
          auto.
        </p>
        <p className="my-3">Goditi l’atmosfera alpina e prenota la tua avventura tra le montagne!</p>
      </div>
    </div>
  );
}
