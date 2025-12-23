import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { weaponTheme } from "../themes/weaponTheme";
import apiGame from "../services/apiGame";

interface WeaponStats {
  fireRate: number;
  magazineSize: number;
  reloadTimeSeconds: number;
  wallPenetration: string;
}

interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  weaponStats: WeaponStats;
}

const Weapon = () => {
  const [weapon, setWeapon] = useState<Weapon | null>(null);
  const { uuid } = useParams();

  useEffect(() => {
    const fetchWeapon = async () => {
      try {
        const response = await apiGame.get(`/weapons/${uuid}`);
        setWeapon(response.data.data);
      } catch (error) {
        console.log("Erro na requisição da arma:", error);
      }
    };

    fetchWeapon();
  }, [uuid]);

  if (!weapon) return <p className="text-white p-6">Carregando...</p>;

  const category = weapon.category.replace("EEquippableCategory::", "");

  const theme = weaponTheme[category] || {
    primary: "#FF4655",
    glow: "rgba(255,70,85,0.25)",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      <div
        style={
          {
            "--weapon-color": theme.primary,
            "--weapon-glow": theme.glow,
          } as React.CSSProperties
        }
        className="min-h-screen mt-20 bg-linear-to-b from-[#070B12] to-[#0c1220] text-white overflow-hidden"
      >
        {/* NAVBAR */}
        <Navbar />

        <div className="px-8 py-12">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            {/* IMAGEM */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="shrink-0 relative"
            >
              <img
                src={weapon.displayIcon}
                alt={weapon.displayName}
                className="w-[420px] lg:w-[560px] drop-shadow-[0_0_60px_var(--weapon-glow)]"
              />

              <div
                className="absolute inset-0 -z-10 blur-3xl rounded-full"
                style={{ backgroundColor: "var(--weapon-glow)" }}
              />
            </motion.div>

            {/* TEXTO */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl"
            >
              <h1
                className="font-['Bebas_Neue'] text-6xl lg:text-8xl uppercase leading-none tracking-tight"
                style={{ color: "var(--weapon-color)" }}
              >
                {weapon.displayName}
              </h1>

              <div
                className="h-1 w-24 mt-4 mb-6"
                style={{ backgroundColor: "var(--weapon-color)" }}
              />

              <p className="text-gray-300 uppercase tracking-wide">
                Categoria: {category}
              </p>
            </motion.div>
          </div>

          {/* ===== STATS ===== */}
          {weapon.weaponStats && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-7xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {[
                {
                  label: "Fire Rate",
                  value: weapon.weaponStats.fireRate,
                },
                {
                  label: "Magazine",
                  value: weapon.weaponStats.magazineSize,
                },
                {
                  label: "Reload Time",
                  value: `${weapon.weaponStats.reloadTimeSeconds}s`,
                },
                {
                  label: "Wall Penetration",
                  value: weapon.weaponStats.wallPenetration.replace(
                    "EWallPenetrationDisplayType::",
                    ""
                  ),
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="
                  bg-[#1e2125]/80 backdrop-blur rounded-xl p-6
                  flex flex-col items-center text-center gap-3
                  border border-white/5
                  hover:border-(--weapon-color)
                  hover:shadow-[0_0_20px_var(--weapon-glow)]
                  transition
                "
                >
                  <h3 className="uppercase tracking-wide text-sm text-gray-400">
                    {stat.label}
                  </h3>
                  <p className="text-2xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Weapon;
