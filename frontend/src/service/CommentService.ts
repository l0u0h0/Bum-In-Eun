// import axios
import axios from "axios";
// import type
import { CommentType } from "../common/types";

/** setting API_URL
 *  -> develop : localhost:3306
 */
const API_URL =
  process.env.NODE_ENV === "production" ? "???" : "http://localhost:3306";

// create DataService class
export default class CommentService {
  public static async getComments(): Promise<CommentType> {
    const response = await axios.get(`${API_URL}/GET_COMMENTS`);
    return response.data;
  }

  public static async addComments(): Promise<CommentType> {
    const response = await axios.post(`${API_URL}/comment`);
    return response.data;
  }
}
