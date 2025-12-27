import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiGame from "../services/apiGame";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MapData {
  uuid: string;
  displayName: string;
  displayIcon: string;
  splash: string;
  tacticalDescription: string;
}

const MapInfo = () => {
  const [maps, setMaps] = useState<MapData | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    const fetchMap = async () => {
      try {
        const response = await apiGame.get(`/maps/${uuid}`);
        setMaps(response.data.data);
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };

    fetchMap();
  }, [uuid]);

  if (!maps)
    return (
      <>
        <Navbar />
        <div className="pt-24 px-6 min-h-screen bg-[#070B12] text-white">
          Carregando...
        </div>
        <Footer />
      </>
    );

  return (
    <>
      <Navbar />

      {/* HERO DO MAPA */}
      <section className="relative pt-24 h-[70vh] w-full overflow-hidden">
        <img
          src={maps.splash}
          alt={maps.displayName}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#070B12]/95 via-[#070B12]/60 to-transparent" />

        {/* Conteúdo */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-12 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-tungsten text-white tracking-wide mb-4">
            {maps.displayName}
          </h1>

          {maps.tacticalDescription && (
            <p className="max-w-2xl text-gray-300 text-lg">
              {maps.tacticalDescription}
            </p>
          )}
        </div>
      </section>

      {/* INFORMAÇÕES */}
      <section className="bg-[#070B12] px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div>
            <h2 className="text-3xl text-white font-semibold mb-4">
              Visão tática
            </h2>

            <p className="text-gray-300 leading-relaxed">
              {maps.tacticalDescription ||
                "Este mapa não possui descrição tática disponível no momento."}
            </p>
          </div>

          {/* Ícone */}
          {maps.displayIcon && (
            <div className="flex justify-center md:justify-end">
              <img
                src={maps.displayIcon}
                alt={maps.displayName}
                className="w-64 opacity-90"
              />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default MapInfo;
