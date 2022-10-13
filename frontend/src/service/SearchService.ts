// import axios
import axios from "axios";
// import type
import { SearchType } from "../common/types";

/** setting API_URL */
const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://bumineunapi.herokuapp.com/search"
    : "http://localhost:3306/search";

// create SearchService class
export default class SearchService {
  public static async searchData(word: string): Promise<SearchType> {
    const response = await axios.get(`${API_URL}/${word}`);
    return response.data;
  }
}
