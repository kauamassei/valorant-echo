import axios from "axios"


const GetData = () => {

    const getDataAgents = async () => {
        try {
            const response = await axios.get("https://valorant-api.com/v1/agents");
             if (response.status == 200) {
                console.log(response)
             }
        } catch {
            console.error();
            
        }
    }

    getDataAgents()

    return (
    <div> </div>

  )
}

export default GetData