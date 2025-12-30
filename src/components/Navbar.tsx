import { useState } from "react";
import valorantEchoLogo from "../assets/valorantEchoLogo.png";
import { useAuth } from "../contexts/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn } = useAuth();
  const logged = isLoggedIn();

  return (
    <header className="fixed top-0 left-0 w-full z-50 overflow-x-hidden">
      <nav className="bg-[#14141A] shadow-md">
        <div
          className="
            max-w-7xl mx-auto
            flex items-center justify-between
            min-h-[62px] md:h-16
            px-3 md:px-10
          "
        >
          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img
              src={valorantEchoLogo}
              alt="Logo Valorant Echo"
              className="w-[180px] md:w-[220px] h-auto object-contain"
            />
          </a>

          {/* LINKS DESKTOP (SEM MAP) */}
          <ul className="hidden md:flex items-center gap-16 text-sm font-medium text-white ml-auto">
            <li>
              <a
                href="/"
                className="
                  relative transition-colors hover:text-[#FF7272]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#FF7272] after:transition-all
                  hover:after:w-full
                "
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/echo"
                className="
                  relative transition-colors hover:text-[#FF7272]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#FF7272] after:transition-all
                  hover:after:w-full
                "
              >
                Echo
              </a>
            </li>

            <li>
              <a
                href="/agents"
                className="
                  relative transition-colors hover:text-[#FF7272]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#FF7272] after:transition-all
                  hover:after:w-full
                "
              >
                Agentes
              </a>
            </li>

            <li>
              <a
                href="/weapons"
                className="
                  relative transition-colors hover:text-[#FF7272]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#FF7272] after:transition-all
                  hover:after:w-full
                "
              >
                Armas
              </a>
            </li>

            <li>
              <a
                href="/maps"
                className="
                  relative transition-colors hover:text-[#FF7272]
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                  after:w-0 after:bg-[#FF7272] after:transition-all
                  hover:after:w-full
                "
              >
                Mapas
              </a>
            </li>
          </ul>

          {/* DESKTOP LOGIN / PROFILE */}
          {!logged ? (
            <a
              href="/login"
              className="
                hidden md:inline-flex ml-10
                items-center justify-center
                bg-[#FF7272] text-white
                text-sm font-semibold
                px-5 py-2
                rounded-md
                hover:brightness-110 transition-all
              "
            >
              Login
            </a>
          ) : (
            <a
              href="/profile"
              className="
                hidden md:flex ml-10
                w-9 h-9
                items-center justify-center
                rounded-full
                border border-[#FF7272]
                hover:bg-[#FF7272]
                transition-all
              "
            >
              👤
            </a>
          )}

          {/* BOTÃO MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            className="
              md:hidden
              flex items-center justify-center
              bg-[#FF7272] text-white
              rounded-lg
              w-10 h-10
              text-xl font-bold
              leading-none
              ml-3
              hover:brightness-110
              transition-all
            "
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* MENU MOBILE */}
        <div
          id="mobile-menu"
          className={`
            md:hidden
            bg-[#14141A]
            border-t border-white/10
            transition-all duration-300
            ${
              menuOpen
                ? "max-h-[400px] opacity-100"
                : "max-h-0 opacity-0 pointer-events-none"
            }
            overflow-hidden
          `}
        >
          <ul className="flex flex-col gap-6 py-6 text-center text-white">
            <li><a href="/" className="hover:text-[#FF7272]">Home</a></li>
            <li><a href="/echo" className="hover:text-[#FF7272]">Echo</a></li>
            <li><a href="/agents" className="hover:text-[#FF7272]">Agentes</a></li>
            <li><a href="/weapons" className="hover:text-[#FF7272]">Armas</a></li>
            <li><a href="/maps" className="hover:text-[#FF7272]">Mapas</a></li>

            <div className="mx-auto w-2/3 h-px bg-white/10" />

            {!logged ? (
              <li>
                <a href="/login" className="text-[#FF7272] font-semibold">
                  Login
                </a>
              </li>
            ) : (
              <li>
                <a href="/profile" className="hover:text-[#FF7272]">
                  Meu Perfil
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
