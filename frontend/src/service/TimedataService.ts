// import axios
import axios from "axios";
// import type
import { TimeType } from "../common/types";

/** setting API_URL */
const API_URL =
  process.env.NODE_ENV === "production"
    ? `${process.env.REACT_APP_API_URL}/time`
    : "http://localhost:3306/time";

// create TimedataService class
export default class TimedataService {
  public static async getDatas(): Promise<TimeType> {
    const response = await axios.get(`${API_URL}/GET_DATAS`);
    return response.data;
  }
}
