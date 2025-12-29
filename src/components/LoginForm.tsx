import useLoginForm from "../hooks/useLoginForm";
import valorantTransparent from "../assets/valorantTransparent.png";
import neonBackground from "../assets/neonBackground.png";
import { FcGoogle } from "react-icons/fc";
import type { LoginSchema } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // obrigatória

const LoginForm = () => {
  const { register, handleSubmit, errors } = useLoginForm();
  const navigate = useNavigate();

  const onSubmit = (data: LoginSchema) => {
    api
      .post("/login", data)
      .then(function (response) {
        localStorage.setItem("token", response.data);
        console.log(response);
        navigate("/profile");
        toast.success("Login efetuado com sucesso!"); // chama toast
      })
      .catch(function () {
        toast.error("Email ou senha incorretos"); // toast de erro
      });
  };

  return (
    <div className="relative min-h-screen bg-[#1c1c1c] overflow-hidden">
      <img
        src={neonBackground}
        alt="Background Neon"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Conteúdo central */}
      <div className="relative z-10 grid place-items-center min-h-screen p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-xl shadow-lg flex flex-col gap-4 text-white"
        >
          <div className="flex flex-col items-center gap-3">
            <img
              src={valorantTransparent}
              alt="Logo Valorant Echo"
              width={220}
            />

            <label className="w-full">
              Email:
              <input
                type="text"
                placeholder="Digite seu email"
                {...register("email")}
                className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
              />
              {errors.email && (
                <small className="text-red-400">{errors.email.message}</small>
              )}
            </label>

            <label className="w-full">
              Senha:
              <input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
                className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
              />
              {errors.password && (
                <small className="text-red-400">
                  {errors.password.message}
                </small>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="bg-[#FF7272] hover:bg-[#ffb5b5] rounded-md py-3 w-full transition"
          >
            Entrar
          </button>

          <div className="text-center">Ou:</div>

          <button
            type="button"
            className="bg-white rounded-md py-3 w-full flex justify-center items-center gap-2 text-black hover:bg-gray-200 transition"
          >
            <FcGoogle /> Fazer login com Google
          </button>

          <p className="mt-4 text-center text-sm">
            Não tem uma conta?{" "}
            <a
              href="/register"
              className="text-blue-400 hover:text-blue-600 transition"
            >
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
