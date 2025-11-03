import useForms from "../hooks/useForms";
import type { FormSchema } from "../schemas/formSchema";
import valorantTransparent from "../assets/valorantTransparent.png";
import neonBackground from "../assets/neonBackground.png";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForms();

  const onSubmit = (data: FormSchema) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <div className="bg-[#1c1c1c]">
          <img
            src={neonBackground}
            alt="Sage Background Image"
            className="w-full h-screen object-cover object-[50%] md:h-auto md:object-contain"
          />

          <div className="absolute inset-0 p-4 flex justify-center items-center">
            <form
              className="w-96 bg-white/30 backdrop-invert backdrop-opacity-30 p-4 rounded-md border border-slate-300 flex flex-col gap-4 text-white items-center"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-2 mb-2 w-full justify-center items-center mt-4">
                <img
                  src={valorantTransparent}
                  alt="Logo Valorant Echo"
                  width={300}
                />
                <div className="flex flex-col gap-2 mb-2 w-full">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="Digite seu email"
                    {...register("email")}
                    className="h-10 pl-2 rounded-md border border-slate-300 bg-white text-gray-600"
                  />
                  {errors.email && (
                    <small className="text-red-500 italic">
                      {errors.email.message}
                    </small>
                  )}
                  <label htmlFor="password">Senha: </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="Digite sua senha"
                    {...register("password")}
                    className="h-10 pl-2 rounded-md border border-slate-300 bg-white text-gray-600"
                  />
                  {errors.password && (
                    <small className="text-red-500 italic">
                      {errors.password.message}
                    </small>
                  )}
                </div>
                <div className="w-full flex flex-col gap-4 items-center">
                  <button className="bg-[#FF7272] hover:bg-[#ffb5b5] rounded-md pt-3 pb-3 w-full text-white">
                    Entrar
                  </button>
                  <p>Ou:</p>
                  <button className="bg-white rounded-md pt-3 pb-3 w-full flex justify-center text-black">
                    Fazer login com Google
                    <FcGoogle />
                  </button>

                  <p className="mt-4">
                    Não tem uma conta?{" "}
                    <button className="text-blue-700">Cadastre-se</button>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
