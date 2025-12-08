import { useState, useEffect } from "react";
import api from "../services/api";
interface Weapons {
  uuid: number;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
}

const Weapons = () => {
  const [weapons, setWeapons] = useState<Weapons[]>([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      const response = await api.get("/weapons");
      if (response.status === 200)
        try {
          setWeapons(response.data.data);
          console.log("Sucesso na requisicao");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          console.log("Erro na requisicao");
        }
    };
    fetchWeapons();
  }, []);
  return (
    <>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 bg-[#070B12]">
      {weapons.map((weapon) => (
        <div
          key={weapon.uuid}
          className="relative group grid h-128 w-full max-w-104 items-end justify-center overflow-hidden 
                     text-center rounded-xl shadow-lg bg-gray-900 hover:bg-[#F96666] transition-all duration-300 ease-out  mx-auto"
        >
          <div
            className="absolute inset-0 h-full w-full bg-cover bg-center 
                       transition-all duration-300 ease-out 
                       group-hover:scale-110"
            style={{
              backgroundImage: `url(${ weapon.displayIcon})`,
            }}
          />

         
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50" />

          <div className="relative py-10 px-6 md:px-8">
            <h2 className="mb-4 text-3xl font-medium text-white font-tungsten">
              {weapon.displayName}
              <p className="">Categoria: {weapon.category}</p>
            </h2>

          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Weapons;
