// import axios
import axios from "axios";
// import type
import { Datatype } from "../common/types";

/** setting API_URL */
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3306";

// create NowDataService class
export default class NowDataService {
  public static async getNowDatas(): Promise<Datatype[]> {
    const response = await axios.get(`${API_URL}/main/GET_NOW_DATAS`);
    return response.data;
  }
}
