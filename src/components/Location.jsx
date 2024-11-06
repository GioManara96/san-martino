import React from "react";

export default function Location() {
  return (
    <div className="xl:container p-5 lg:p-0">
      <h2 className="text-2xl px-5 lg:px-0 md:text-4xl font-bold" id="location">
        Location
      </h2>
      <div className="my-5 lg:px-0">
        <div className="lg:max-w-[765px] w-full rounded-xl border border-[rgb(38,38,38)] p-5 mb-5 bg-[rgb(26,26,26)]">
          <h3 className="mb-3 text-lg text-[#ccc] underline">Dove si trova</h3>
          <p>
            Siamo a 1450 metri sul mare, nel cuore del Parco Naturale Paneveggio - Pale di San Martino. Il paese conta circa 500 abitanti e fa parte del comune
            di Primiero San Martino di Castrozza, nell’Alta Valle del Primiero. San Martino di Castrozza è un piccolo centro alpino che permette una vacanza in
            quota ma con le comodità e i servizi presenti in paese.
          </p>
        </div>

        <div className="lg:max-w-[765px] w-full rounded-xl border border-[rgb(38,38,38)] p-5 mb-5 bg-[rgb(26,26,26)]">
          <h3 className="my-3 text-lg text-[#ccc] underline">Che cosa fare</h3>
          <p className="mb-3">
            Se amate le Dolomiti in estate, a San Martino di Castrozza potrete praticare alpinismo, arrampicata sulle tante pareti di roccia presenti, dedicarvi
            alle escursioni in mountain bike o al trekking lungo i sentieri che dal paese partono e si diramano all’interno del parco naturale.
          </p>
          <p className="mb-3">
            Invece, se preferite venire d’inverno, è lo sci che vi aspetta: per i più piccoli, tanti corsi di sci tenuti da maestri professionisti. Per gli
            adulti, lunghe piste da sci innevate (anche illuminate in notturna), sentieri battuti per chi va con le ciaspole, piste da sci di fondo e ben 3
            snowpark per lo snowboard.
          </p>
          <p className="mb-3">
            Infine, per chi sogna una vacanza tutta relax, le SPA e i centri benessere dei tanti hotel che popolano il centro vi aspettano tutto l’anno insieme
            a botteghe artigianali, negozietti e ristorantini tipici.
          </p>
        </div>

        <div className="lg:max-w-[765px] w-full rounded-xl border border-[rgb(38,38,38)] p-5 mb-5 bg-[rgb(26,26,26)]">
          <h3 className="my-3 text-lg text-[#ccc] underline">Come arrivare</h3>
          <p className="mb-3">
            Se viaggiate in auto, per chi arriva dall’Autostrada A22 si esce a Trento Sud e si percorrono 110 chilometri in direzione di Cismon del Grappa,
            Arten, poi Primiero e San Martino. Chi arriva dalla A13 esce a Padova Ovest e poi prosegue verso Cismon del Grappa, Arten, Primiero e San Martino
            per circa 130 chilometri.
          </p>
          <p className="mb-3">
            Se viaggiate in treno, potete scendere alle stazioni di Feltre, Trento oppure Ora e da lì proseguire sempre in bus con la società Trentino Trasporti
            fino a San Martino di Castrozza.
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d344.8309627361541!2d11.80343!3d46.257231!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4778592bfde88db9%3A0x7a28e46b834688b6!2sVia%20Passo%20Rolle%2C%2010%2C%2038054%20San%20Martino%20di%20Castrozza%20TN!5e0!3m2!1sit!2sit!4v1730876723470!5m2!1sit!2sit"
            className="w-full h-[450px] border-0"
            allowfullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="text-center w-full lg:pe-20">
          <cite className="text-sm">
            Fonte:{" "}
            <a
              href="https://www.visittrentino.info/it/trentino/destinazioni/san-martino-di-castrozza_md_113"
              target="_blank"
              title="vai al sito visitrentino.info"
              className="text-blue-400 hover:text-blue-600">
              visittrentino.info
            </a>
          </cite>
        </div>
      </div>
    </div>
  );
}
