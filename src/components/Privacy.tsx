import Navbar from "../components/Navbar";
import Footer from "./Footer";

const Privacy = () => {
  return (
    <>
      <Navbar />

      <main className="pt-24 px-6 bg-[#070B12] min-h-screen text-gray-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-tungsten text-white mb-6">
            Política de Privacidade
          </h1>

          <p className="text-sm text-gray-400 mb-10">
            Última atualização: 25/12/2025
          </p>

          <section className="space-y-6 leading-relaxed">
            <p>
              A sua privacidade é importante para nós. Esta Política de
              Privacidade descreve como os dados dos usuários são coletados,
              utilizados e protegidos ao utilizar este site.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              1. Coleta de Informações
            </h2>
            <p>
              Podemos coletar informações fornecidas pelo usuário no cadastro,
              como nome e e-mail, além de dados técnicos como endereço IP e tipo
              de navegador.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              2. Uso das Informações
            </h2>
            <p>
              Os dados coletados são utilizados para permitir o funcionamento do
              site, autenticar usuários e melhorar a experiência na plataforma.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos ou compartilhamos dados pessoais com terceiros, exceto
              quando exigido por lei ou para o funcionamento de serviços
              essenciais.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              4. APIs de Terceiros
            </h2>
            <p>
              Utilizamos dados da Valorant API (valorant-api.com), uma API pública
              não oficial. Este site não é afiliado, patrocinado ou endossado
              pela Riot Games.
            </p>

            <h2 className="text-2xl text-white font-semibold">5. Cookies</h2>
            <p>
              Podemos utilizar cookies para manter a sessão do usuário ativa e
              melhorar a navegação. O usuário pode desativar os cookies no
              navegador.
            </p>

            <h2 className="text-2xl text-white font-semibold">
              6. Direitos do Usuário
            </h2>
            <p>
              O usuário pode solicitar acesso, correção ou exclusão de seus
              dados, conforme previsto na LGPD.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Privacy;
