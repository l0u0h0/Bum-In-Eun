import axios from "axios";

const API_URL =
  process.env.NODE_ENV === "production" ? "???" : "http://localhost:3306";

export default class DataService {
  static async getDatas() {
    const response = await axios.get(`${API_URL}/test/GET_DATA`);
    console.log(response);
    return response.datas;
  }
}
