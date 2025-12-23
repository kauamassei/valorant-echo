import axios from "axios";

const apiGame = axios.create({
  baseURL: "https://valorant-api.com/v1",
});

export default apiGame;
