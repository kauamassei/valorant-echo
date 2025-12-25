import { motion } from "framer-motion";
import Agents from "../components/Agents";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AgentsPage = () => {
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
        <Agents />
      </motion.div>
      <section>
            <Footer />
          </section>
    </>
  );
};

export default AgentsPage;
