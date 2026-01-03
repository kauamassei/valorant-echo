import api from "./api"; 

interface CreateTrainingPayload {
  rank: string;
  role: string;
  goal: string;
}

export function createTrainingPlan(data: CreateTrainingPayload) {
  return api.post("/training", data);
}
