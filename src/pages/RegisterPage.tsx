import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
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
        <RegisterForm />
      </motion.div>
    </>
  );
};

export default RegisterPage;
