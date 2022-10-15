// import axios
import axios from "axios";
// import type
import { Datatype, DataListType } from "../common/types";

/** setting API_URL */
const API_URL =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_URL
    : "http://localhost:3306";

console.log(API_URL);
console.log(process.env.REACT_APP_NAV_develop);
console.log(process.env.REACT_APP_API_URL);
// create DataService class
export default class DataService {
  public static async getDatas(): Promise<Datatype[]> {
    const response = await axios.get(`${API_URL}/main/GET_DATAS`);
    return response.data;
  }

  public static async getListDatas(type: string): Promise<DataListType[]> {
    const response = await axios.get(`${API_URL}/crime/GET_DATAS/${type}`);
    return response.data;
  }
}
