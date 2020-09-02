import axios from "axios";

export function getRanks() {
  return axios.get("http://localhost:8000/rank/get");
}
