import { useState } from "react";
import valorantEchoLogo from "../assets/valorantEchoLogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="bg-[#14141A]">
        <div className="flex justify-between items-center h-16 p-10">
          <div>
            <a href="/">
              <img
                src={valorantEchoLogo}
                alt="Logo Valorant Echo"
                width={250}
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center justify-between m-0 p-0 gap-20 ml-auto text-white">
            <li>
              <a href="/" className="hover:text-[#FF7272] transition-all">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#FF7272]">
                Tracker
              </a>
            </li>
            <li>
              <a href="/agents" className="hover:text-[#FF7272]">
                Agentes
              </a>
            </li>
            <li>
              <a href="weapons" className="hover:text-[#FF7272]">
                Armas
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#FF7272]">
                Eventos
              </a>
            </li>
          </ul>

          <button className="hidden md:flex bg-[#FF7272] rounded-sm text-white ml-10 pl-4 pr-4 pt-1 pb-1">
            <a href="/login">Login</a>
          </button>

          <button
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-1xl md:hidden bg-[#FF7272] rounded-md text-white ml-10 pl-2 pr-2 pt-1 pb-1"
          >
            {menuOpen ? (
              <span className="text-sm">X</span>
            ) : (
              <span className="text-sm">☰</span>
            )}
          </button>
        </div>

        <ul
          id="mobile-menu"
          className={`
            md:hidden w-full bg-[#14141A] text-white flex flex-col items-center gap-4 px-4
            transition-all duration-300 ease-in-out transform overflow-hidden
            ${
              menuOpen
                ? "opacity-100 translate-y-0 max-h-80"
                : "opacity-0 -translate-y-4 max-h-0 pointer-events-none"
            }
          `}
        >
          <li>
            <a href="/" className="hover:text-[#FF7272] transition-all">
              Home
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FF7272]">
              Tracker
            </a>
          </li>
          <li>
            <a href="agents" className="hover:text-[#FF7272]">
              Agentes
            </a>
          </li>
          <li>
            <a href="weapons" className="hover:text-[#FF7272]">
              Armas
            </a>
          </li>
          <li>
            <a href="" className="hover:text-[#FF7272]">
              Eventos
            </a>
          </li>
          <li>
            <a href="login" className="hover:text-[#FF7272]">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
