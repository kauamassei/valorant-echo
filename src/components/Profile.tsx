import axios from "axios";
import { useEffect, useState } from "react";
import defaulAvatar from "../assets/defaultAvatar.jpg";

interface UserData {
  email: string;
  name: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [avatar, setAvatar] = useState(defaulAvatar);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      const { data } = await axios.get("http://localhost:3333/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(data.user);
      setUser(data.user);
    };

    loadUser();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;
     
      const reader = new FileReader();

      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    
  };

  return (
    <>
      <div>
        <h1>Perfil de usuario</h1>

        {user ? (
          <div>
            <div>
              <img src={avatar} alt="" width={50} height={50} className="rounded-full" />
              <label>Carregar uma nova foto
              <input type="file" onChange={handleAvatarChange} className="bg-blue-800" />
              </label>
              
            </div>
            <ul>
              <li>Nome: {user.name}</li>
              <li>Email: {user.email}</li>
            </ul>
          </div>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
