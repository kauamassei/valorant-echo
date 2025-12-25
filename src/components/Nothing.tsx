import Navbar from "./Navbar"

const Nothing = () => {
  return (
    <>
    <Navbar />
    <h1 className="flex justify-center items-center mt-70">
        Ainda não tem nada, curioso(a)
    </h1>

            {/* <SpotlightCard
          className="max-w-sm"
          spotlightColor="rgba(255, 0, 80, 0.25)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm text-red-400 font-semibold">NOVO</span>

            <h3 className="text-2xl font-bold text-white">Sistema de Login</h3>

            <p className="text-neutral-400 text-sm">
              Autenticação segura com JWT e refresh token.
            </p>

            <button className="mt-4 self-start rounded-lg bg-red-500 px-4 py-2 w-full text-sm font-semibold text-white hover:bg-red-600 transition">
              Ver mais
            </button>
          </div>
        </SpotlightCard> */}
    </>

  )
}

export default Nothing