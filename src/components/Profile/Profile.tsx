import { useEffect, useState } from "react";
import defaulAvatar from "../../assets/defaultAvatar.jpg";
import ProfileHeader from "./ProfileHeader";
import ProfileInfo from "./ProfileInfo";
import AccountSection from "./AccountSection";
import Navbar from "../Navbar";
import api from "../../services/api";
import Footer from "../Footer";
import FavAgents from "./FavAgents";

export interface UserData {
  email: string;
  name: string;
  avatar?: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>(defaulAvatar);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const { data } = await api.get("/me");
  
        setUser(data.user);
        setAvatarPreview(data.user.avatar || defaulAvatar);
      } catch (err) {
        console.error("Erro ao carregar perfil", err);
      }
    };
  
    loadUser();
  }, []);
  
  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    const token = localStorage.getItem("token");

    const res = await api.post("/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setUser((prev) => (prev ? { ...prev, avatar: res.data.avatar } : prev));

    setAvatarPreview(res.data.avatar);
  };

  if (!user) {
    return <p className="text-white">Carregando...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#070B12] pt-24">
        <div className="mx-auto max-w-2xl rounded-2xl bg-[#0B101A] shadow-lg">
          <ProfileHeader avatar={avatarPreview} onUpload={handleUpload} />

          <div className="pt-16 px-6 pb-6">
            <ProfileInfo name={user.name} />

            <FavAgents />

            <AccountSection email={user.email} />
          </div>
        </div>
      </div>
      <section>
            <Footer />
          </section>
    </>
  );
};

export default Profile;
