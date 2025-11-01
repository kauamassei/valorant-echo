import valorantEchoLogo from "../assets/valorantEchoLogo.png";

const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="bg-[#14141A]">
        <div className="flex justify-between items-center h-16 p-10">
          <div>
            <a href="/">
              {" "}
              <img
                src={valorantEchoLogo}
                alt="Logo Valorant Echo"
                width={250}
              />
            </a>
          </div>

          <ul className="hidden md:flex items-center justify-between m-0 p-0 gap-20 ml-auto text-white">
            <li>
              <a href="/" className="hover:text-[#FF7272] transition-all ">
                Home
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#FF7272]">
                Tracker
              </a>
            </li>
            <li>
              <a href="" className="hover:text-[#FF7272]">
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
          <button className="text-1xl md:hidden bg-[#FF7272] rounded-md text-white ml-10  pl-2 pr-2 pt-1 pb-1">
            ☰
          </button>
          <button className="hidden md:flex bg-[#FF7272] rounded-sm text-white ml-10 pl-4 pr-4 pt-1 pb-1">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
