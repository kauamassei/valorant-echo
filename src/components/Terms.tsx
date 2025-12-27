import Navbar from "../components/Navbar";

const Terms = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-6 bg-[#070B12] min-h-screen text-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-tungsten text-white mb-6">
            Termos de Uso
          </h1>

          <p className="text-sm text-gray-400 mb-10">
            Última atualização: 25/12/2025
          </p>

          <section className="space-y-6 leading-relaxed">
            <p>
              Ao acessar e utilizar este site, você concorda com os termos e
              condições descritos abaixo.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              1. Objetivo do Site
            </h2>
            <p>
              Este site tem como objetivo fornecer informações relacionadas ao
              jogo Valorant, utilizando dados de APIs públicas.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              2. Cadastro e Conta
            </h2>
            <p>
              O usuário é responsável por manter a confidencialidade de suas
              credenciais e pelas ações realizadas em sua conta.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              3. Uso Permitido
            </h2>
            <p>
              É proibido utilizar o site para fins ilegais, explorar falhas de
              segurança ou tentar acesso não autorizado.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              4. Propriedade Intelectual
            </h2>
            <p>
              As imagens e informações do jogo Valorant pertencem à Riot Games.
              Este site não possui vínculo oficial com a Riot Games.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              5. Limitação de Responsabilidade
            </h2>
            <p>
              O site é fornecido “como está”, sem garantias de funcionamento
              contínuo ou ausência de erros.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              6. Alterações
            </h2>
            <p>
              Reservamo-nos o direito de modificar estes Termos a qualquer
              momento. O uso contínuo do site implica concordância com as
              alterações.
            </p>
          </section>
        </div>
      </main>
    </>
  );
};

export default Terms;
