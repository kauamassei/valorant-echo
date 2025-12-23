import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import apiGame from "../services/apiGame";

interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
}

const Weapons = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await apiGame.get("/weapons");
        setWeapons(response.data.data);
      } catch (error) {
        console.log("Erro na requisição de armas:", error);
      }
    };

    fetchWeapons();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-6 pt-24 bg-[#070B12]">
        {weapons.map((weapon) => (
          <Link
            key={weapon.uuid}
            to={`/weapons/${weapon.uuid}`}
            className="block mx-auto w-full max-w-104"
          >
            <div
              className="
              relative group grid h-128 w-full
              items-end justify-center overflow-hidden
              text-center rounded-xl shadow-lg
              bg-gray-900
              transition-all duration-300 ease-out
            "
            >
              {/* Background */}
              <div
                className="
                absolute inset-0 h-full w-full
                bg-contain bg-center bg-no-repeat
                transition-all duration-300 ease-out
                group-hover:scale-110
              "
                style={{
                  backgroundImage: `url(${weapon.displayIcon})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50" />

              {/* Conteúdo */}
              <div className="relative py-10 px-6 md:px-8">
                <h2 className="mb-2 text-3xl font-medium text-white font-tungsten">
                  {weapon.displayName}
                </h2>

                <p className="text-sm text-gray-300 uppercase tracking-wide">
                  {weapon.category.replace("EEquippableCategory::", "")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default Weapons;
