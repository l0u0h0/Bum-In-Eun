// import axios
import axios from "axios";
// import type
import { TimeType } from "../common/types";

/** setting API_URL
 *  -> develop : localhost:3306
 */
const API_URL =
  process.env.NODE_ENV === "production" ? "???" : "http://localhost:3306/time";

// create DataService class
export default class TimedataService {
  public static async getData_1(): Promise<TimeType[]> {
    const response = await axios.get(`${API_URL}/GET_DATA1`);
    return response.data;
  }

  public static async getData_2(): Promise<TimeType[]> {
    const response = await axios.get(`${API_URL}/GET_DATA2`);
    return response.data;
  }

  public static async getListData(word: string): Promise<TimeType[]> {
    const response = await axios.get(`${API_URL}/GET_LIST_DATA/${word}`);
    return response.data;
  }
}
