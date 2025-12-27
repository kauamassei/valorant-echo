import { useState, useEffect } from "react";
import apiGame from "../services/apiGame";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface MapData {
  uuid: string;
  displayName: string;
  splash: string;
}

const Maps = () => {
  const [maps, setMaps] = useState<MapData[]>([]);

  useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await apiGame.get("/maps");
        setMaps(response.data.data);
        console.log("Requisição foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };
    fetchMaps();
  }, []);

  return (
    <>
      <Navbar />

      <div className="pt-24 px-6 bg-[#070B12] min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {maps.map((mapa) => (
            <div
              key={mapa.uuid}
              className="relative group overflow-hidden rounded-xl shadow-xl"
            >
              {/* Imagem do mapa */}
              <img
                src={mapa.splash}
                alt={mapa.displayName}
                className="w-full h-[260px] md:h-[300px] lg:h-[340px] object-cover 
                           transition-transform duration-500 ease-out 
                           group-hover:scale-105"
              />

              {/* Overlay gradiente */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

              {/* Nome do mapa */}
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-4xl font-tungsten text-white tracking-wide">
                  {mapa.displayName}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section>
            <Footer />
          </section>
    </>
  );
};

export default Maps;
