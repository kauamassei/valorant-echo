
import { useEffect, useState } from "react"
import api from "../services/api";

const HomePageTest = () => {
    
    const [agents, setAgent] = useState<any[]>([]);

    useEffect(() => {
        api.get("/agents").then((response) => setAgent(response.data.data)).catch((err) => {
            console.log("Erro na requisição" + err)
        })
    }, [])

  return (
    <>
    <p> Agente:  </p>
    <ul>
        {agents.map((agent) => (
            <li key={agent.uuid}>{agent.displayName}</li>
        ))}
    </ul>
    </>
  )
}

export default HomePageTest