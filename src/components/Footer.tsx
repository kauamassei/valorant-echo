import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b0f14] border-t border-red-500/20">
      <div className="mx-auto w-full max-w-7xl px-6 py-12">
        {/* Top */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Logo / Brand */}
          <div>
            <h2 className="text-2xl  tracking-widest text-white">
              VALORANT<span className="text-red-500">ECHO</span>
            </h2>
            <p className="mt-3 text-sm text-neutral-400 max-w-xs">
              Valorant é uma marca registrada da Riot Games, Inc. Este site não
              é afiliado ou endossado pela Riot Games. Este é um projeto pessoal
              sem fins lucrativos.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-red-500 uppercase">
              Navegação
            </h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a className="hover:text-red-400 transition" href="/agents">
                  Agentes
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="/weapons">
                  Armas
                </a>
              </li>
              <li>
                <a className="hover:text-red-400 transition" href="/maps">
                  Mapas
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-bold tracking-wider text-red-500 uppercase">
              Desenvolvedor
            </h3>
            <div className="flex gap-5">
              {/** Github */}
              <p className="text-sm text-neutral-400">Kauã Massei</p>
              <a
                href="https://github.com/kauamassei"
                target="_blank"
                className="text-neutral-400 hover:text-red-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/kauamassei/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-red-500 transition"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.85 3.368-1.85 3.6 0 4.268 2.369 4.268 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.554V9h3.565v11.452Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
          <span>
            © {new Date().getFullYear()} ValorantEcho. Todos os direitos
            reservados.
          </span>

          <div className="flex gap-6">
          <Link to='/privacidade' className="hover:text-red-400 transition">
              Privacidade
            </Link>
            <Link to='/termos' className="hover:text-red-400 transition">
              Termos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


