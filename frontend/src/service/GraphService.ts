// import axios
import axios from "axios";
// import type
import { GraphType } from "../common/types";

/** setting API_URL
 *  -> develop : localhost:3306
 */
const API_URL =
  process.env.NODE_ENV === "development"
    ? "https://bumineunapi.herokuapp.com/time"
    : "http://localhost:3306/time";

// create DataService class
export default class GraphService {
  public static async getListData(word: string): Promise<GraphType[]> {
    const response = await axios.get(`${API_URL}/GET_LIST_DATA/${word}`);
    return response.data;
  }
}