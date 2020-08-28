import axios from "axios";

export function getRanks() {
  return axios.get("http://54.180.145.66:8000/rank/get");
}
