import axios from "axios";
import { Datatype } from "../common/types";

const API_URL =
  process.env.NODE_ENV === "production" ? "???" : "http://localhost:3306";

export default class DataService {
  public static async getDatas(): Promise<Datatype[]> {
    const response = await axios.get(`${API_URL}/test/GET_DATAS`);
    console.log(response.data);
    return response.data;
  }
}
