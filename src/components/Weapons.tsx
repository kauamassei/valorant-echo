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
      <div className="mt-6">
        <h1 className="text-4xl flex justify-center">Arsenal</h1>
        <ul>
          {weapons.map((weapon) => (
            <div className="flex justify-center items-center bg-[#FF7272] pl-4 pr-4 pt-4 pb-12 m-8 border rounded-4xl hover:bg-[#ffc4c9] transform transition hover:-translate-y-1  motion-reduce:hover:transform-none">
              <li>
                <div className="bg-white flex justify-center flex-col items-center gap-2 p-4 rounded-4xl">
                  <h1 className="text-2xl">{weapon.displayName}</h1>
                  <p className="">Categoria: {weapon.category}</p>
                  <img
                    src={weapon.displayIcon}
                    alt="weapon display"
                    width={250}
                    height={250}
                  />
                  <div>
                    <h2>...</h2>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Weapons;
