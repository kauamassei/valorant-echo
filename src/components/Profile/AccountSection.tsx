import { useAuth } from "../../contexts/useAuth";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
interface Props {
  email: string;
}

const AccountSection = ({ email }: Props) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleDeleteAccount() {
    toast.info(
      ({ closeToast }) => (
        <div>
          <p className="font-semibold mb-2">
            Tem certeza que deseja apagar sua conta?
          </p>

          <div className="flex gap-3 mt-3">
            <button
              onClick={async () => {
                try {
                  await api.delete("/me");

                  localStorage.removeItem("token");

                  toast.success("Conta apagada com sucesso");
                  closeToast();

                  navigate("/login");
                } catch (error) {
                  console.log(error);
                  toast.error("Erro ao apagar conta");
                }
              }}
              className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
            >
              Apagar
            </button>

            <button
              onClick={closeToast}
              className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      ),
      { autoClose: false }
    );
  }
  return (
    <div className="mt-8 flex flex-col gap-2">
      <h2 className="text-lg font-semibold text-white mb-3">Minha Conta</h2>

      <p className="text-purple-400">{email}</p>

      <p className="text-white cursor-pointer">Gerenciar</p>
      <a onClick={logout} className="text-red-300 cursor-pointer">
        Sair
      </a>
      <button
        onClick={handleDeleteAccount}
        className="
    text-red-500 hover:text-red-400
    text-xs
    transition
flex items-start
    underline-offset-2
  "
      >
        Apagar conta
      </button>
    </div>
  );
};

export default AccountSection;
