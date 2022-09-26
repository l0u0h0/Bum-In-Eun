// import axios
import axios from "axios";
// import type
import { CommentType } from "../common/types";

/** setting API_URL
 *  -> develop : localhost:3306
 */
const API_URL =
  process.env.NODE_ENV === "production"
    ? "???"
    : "http://localhost:3306/comment";

// create DataService class
export default class CommentService {
  public static async getComments(word: string): Promise<CommentType> {
    const response = await axios.get(`${API_URL}/GET_COMMENTS/${word}`);
    return response.data;
  }

  public static async addComments(comment: CommentType): Promise<CommentType> {
    const response = await axios.post(`${API_URL}/ADD_COMMENT`, comment);
    return response.data;
  }
}
