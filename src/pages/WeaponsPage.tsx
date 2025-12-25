import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Weapons from "../components/Weapons";
import Footer from "../components/Footer";

const WeaponsPage = () => {
  return (
    <>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen"
      >
        <div className="">
          <Weapons />
        </div>
      </motion.div>
      <section>
            <Footer />
          </section>
    </>
  );
};

export default WeaponsPage;
