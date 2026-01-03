import { useState } from "react";
import useForms from "../hooks/useRegisterForm";
import type { FormSchema } from "../schemas/formSchema";
import valorantTransparent from "../assets/valorantTransparent.png";
import neonBackground from "../assets/neonBackground.png";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const RegisterForm = () => {
  const { register, handleSubmit, errors } = useForms();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    setLoading(true);

    api
      .post("/cadastro", data)
      .then(function (response) {
        console.log(response);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
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
              Criando sua conta...
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

        <div className="relative z-10 grid place-items-center min-h-screen p-4">
          <form
            className="w-full max-w-sm bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-xl shadow-lg flex flex-col gap-4 text-white"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col items-center gap-3">
              <img
                src={valorantTransparent}
                alt="Logo Valorant Echo"
                width={300}
              />

              <div className="flex flex-col gap-2 mb-2 w-full">
                <label htmlFor="name" className="w-full">
                  Nome:
                  <input
                    type="text"
                    id="name"
                    placeholder="Digite seu nome"
                    {...register("name")}
                    className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
                  />
                  {errors.name && (
                    <small className="text-red-500 italic">
                      {errors.name.message}
                    </small>
                  )}
                </label>

                <label htmlFor="email" className="w-full">
                  Email:
                  <input
                    type="text"
                    id="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                    className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
                  />
                  {errors.email && (
                    <small className="text-red-500 italic">
                      {errors.email.message}
                    </small>
                  )}
                </label>

                <label htmlFor="password" className="w-full">
                  Senha:
                  <input
                    type="password"
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
                  />
                  {errors.password && (
                    <small className="text-red-500 italic">
                      {errors.password.message}
                    </small>
                  )}
                </label>

                <label htmlFor="confirmPassword" className="w-full">
                  Confirme sua senha:
                  <input
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirme sua senha"
                    {...register("confirmPassword")}
                    className="mt-1 w-full h-10 px-3 rounded-md bg-white text-gray-700 border border-gray-300 focus:outline-none"
                  />
                  {errors.confirmPassword && (
                    <small className="text-red-500 italic">
                      {errors.confirmPassword.message}
                    </small>
                  )}
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#FF7272] hover:bg-[#ffb5b5] rounded-md py-3 w-full transition disabled:opacity-70"
              >
                Cadastrar
              </button>


              <p className="mt-4 text-center text-sm">
                Já tem uma conta?{" "}
                <a href="/login" className="text-blue-400 hover:text-blue-600">
                  Entrar
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
