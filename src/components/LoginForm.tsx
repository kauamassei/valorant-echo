import { useState } from "react";
import useLoginForm from "../hooks/useLoginForm";
import valorantTransparent from "../assets/valorantTransparent.png";
import neonBackground from "../assets/neonBackground.png";
import type { LoginSchema } from "../schemas/loginSchema";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // obrigatória

const LoginForm = () => {
  const { register, handleSubmit, errors } = useLoginForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: LoginSchema) => {
    setLoading(true);

    api
      .post("/login", data)
      .then(function (response) {
        localStorage.setItem("token", response.data);
        console.log(response);
        navigate("/profile");
        toast.success("Login efetuado com sucesso!");
      })
      .catch(function () {
        toast.error("Email ou senha incorretos");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <span className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <p className="text-white text-lg font-medium">
              Entrando na sua conta...
            </p>
          </div>
        </div>
      )}

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
                  <small className="text-red-400">
                    {errors.email.message}
                  </small>
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
              disabled={loading}
              className="bg-[#FF7272] hover:bg-[#ffb5b5] rounded-md py-3 w-full transition disabled:opacity-70"
            >
              Entrar
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
    </>
  );
};

export default LoginForm;
