/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import defaulAvatar from "../assets/defaultAvatar.jpg";
import headerBackground from "../assets/ValorantChinaBeta.jpg";

interface UserData {
  email: string;
  name: string;
  avatar: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(defaulAvatar);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  useEffect(() => {
    try {
      const loadUser = async () => {
        const token = localStorage.getItem("token");
        const { data } = await axios.get("http://localhost:3333/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(data.user);
        setUser(data.user);
      };

      loadUser();
    } catch (error) {
      console.log(error);
    }
  }, []);


  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !e.target.files[0]) return;

    const file = e.target.files[0];

    setAvatarFile(file);
    setAvatarPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("image", file);

    try {
      const token = localStorage.getItem("token");

      const res = await axios.post("http://localhost:3333/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(prev =>
        prev ? { ...prev, avatar: res.data.avatar } : prev
      );
      
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-[#070B12] shadow-lg overflow-visible transition-colors duration-200">

        {user ? (
          <div>
            <div className="mx-auto max-w-2xl rounded-2xl bg-[#0B101A] shadow-[0_0_30px_rgba(0,0,0,0.4)]">
              <div>
                <div className="relative h-48">
                  <img
                    src={headerBackground}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                      <img
                        src={user.avatar ?? defaulAvatar}
                        alt="Profile"
                        className="w-24 h-24 rounded-xl object-cover border-4 border-white dark:border-gray-800 shadow-lg"
                      />

                      <label
                        htmlFor="avatar"
                        className="absolute bottom-1 right-1 cursor-pointer bg-[#F96666] hover:bg-[#f17c7c] text-white p-2 rounded-full shadow-lg transition"
                        title="Editar foto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536M9 11l6.232-6.232a2.5 2.5 0 013.536 3.536L12.5 14.5H9V11z"
                          />
                        </svg>
                      </label>
                    </div>
                  </div>

                  <input
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={handleUpload}
                    className="hidden"
                  />
                </div>

                <div className="pt-16 px-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {user?.name}
                      </h1>
                      <p className="text-purple-600">Chainsaw Man 悪魔</p>
                    </div>

                    <button className="inline-flex items-center px-4 py-2 bg-[#F96666] hover:bg-[#f17c7c] text-white rounded-lg transition-colors duration-200 text-sm font-medium">
                      Compartilhar
                      <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="mt-6 text-gray-600 dark:text-gray-300">
                    Finge que tem algo super importante escrito aqui só pra
                    preencher espaco
                  </p>

                  <div className="mt-6">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Agentes favoritos
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-900 text-white rounded-lg text-sm font-medium">
                        Sage
                      </span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-2">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Minha Conta
                    </h2>
                    <a className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:underline">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {user.email}
                    </a>
                    <p className="text-white text-semibold">Gerenciar</p>
                    <p className="text-red-300">Sair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#070B12]  shadow-lg overflow-hidden transition-colors duration-200">
            <p>Carregando...</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
