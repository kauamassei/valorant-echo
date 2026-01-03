import SpotlightCard from "./SpotlightCard";

const SectionHome = () => {
  return (
    <div className="mt-24 px-4">
      <div
        className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
        place-items-center
      "
      >
        <SpotlightCard
          className="w-full max-w-sm"
          spotlightColor="rgba(255, 0, 80, 0.25)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-red-400">NOVO</span>
            <h3 className="text-2xl font-bold text-white">
              Ecossistema Valorant
            </h3>
            <p className="text-sm text-neutral-400">
              Explore as informações essenciais do universo do game.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="w-full max-w-sm"
          spotlightColor="rgba(255, 0, 80, 0.25)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-red-400">NOVO</span>
            <h3 className="text-2xl font-bold text-white">Sistema de Treino</h3>
            <p className="text-sm text-neutral-400">
              Receba um treino personalizado com as melhores dicas para evoluir.
            </p>
          </div>
        </SpotlightCard>

        <SpotlightCard
          className="w-full max-w-sm"
          spotlightColor="rgba(255, 0, 80, 0.25)"
        >
          <div className="flex flex-col gap-3">
            <span className="text-sm font-semibold text-yellow-400">
              EM DESENVOLVIMENTO
            </span>
            <h3 className="text-2xl font-bold text-white">
              Perfil Personalizado
            </h3>
            <p className="text-sm text-neutral-400">
              Crie, personalize e dê ao seu perfil a cara de Valorant! Conheça
              outros jogadores.
            </p>
          </div>
        </SpotlightCard>


      </div>
    </div>
  );
};

export default SectionHome;
