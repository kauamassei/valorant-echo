import { motion } from "framer-motion";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

const LoginPage = () => {
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
       <LoginForm />
    </motion.div>
     
    </>
  );
};

export default LoginPage;
