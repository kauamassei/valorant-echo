import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
  return (
    <aside className="hidden md:flex w-60 flex-col bg-[#020617] border-r border-white/10 p-4">
      <h2 className="text-white font-bold mb-6">Menu</h2>

      <nav className="space-y-2 text-sm">
        <Link
          to="/dashboard/training"
          className="block rounded px-3 py-2 text-gray-300 hover:bg-white/5"
        >
          Visão geral
        </Link>
        <button
                onClick={() => navigate("/dashboard/stepper")}
                className="bg-[#F96666]  hover:bg-[#fc9292]  transition px-6 py-3 rounded-lg font-semibold"
              >
                Criar novo treino
              </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
