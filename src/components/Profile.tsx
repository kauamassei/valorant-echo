import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  email: string;
  name: string;
}

const Profile = () => {
  const [user, setUser] = useState<UserData | null>(null);

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

  return (
    <>
      <div>
        <h1>Perfil de usuario</h1>

        {user ? (
          <ul>
            <li>Nome: {user.name}</li>
            <li>Email: {user.email}</li>
          </ul>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
