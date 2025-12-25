import { useState, useEffect } from "react"
import apiGame from "../services/apiGame";
import Navbar from "./Navbar";

interface Maps {
    uuid: string;
    displayName: string;
    displayIcon: string | null;
    listViewIcon: string | null;
}



const Maps = () => {
    const [maps, setMaps] = useState<Maps[]>([])

 useEffect(() => {
    const fetchMaps = async () => {
      try {
        const response = await apiGame.get("/maps");
        setMaps(response.data.data);
        console.log("Requisição foi um sucesso!");
      } catch (error) {
        console.log("Erro na requisição: " + error);
      }
    };
    fetchMaps();
  }, []);





    return (
        <>
        <Navbar />
        <div className="mt-24">
            {maps.map((mapa) => (
                <li key={mapa.uuid}>
                    <h3>{mapa.displayName}</h3>
                    {mapa.displayIcon}

                    {mapa.listViewIcon}
                </li>
            ))}
        </div>
        </>
    )
}

export default Maps