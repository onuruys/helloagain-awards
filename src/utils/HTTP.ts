import axios, { type AxiosHeaders } from "axios";
import Constants from "./Config";
export const Http = {
  POST: async (url: string, data: any, headers?: AxiosHeaders): Promise<any> => {
    const result = await axios.post(
      `${Constants.BASE_URL}/clients/${Constants.CLIENT_ID}${url}`,
      { ...data },
      { headers }
    );
    return result;
  },
  GET: async (url: string, data?: object, headers?: AxiosHeaders): Promise<any> => {
    const result = await axios.get(
      `${Constants.BASE_URL}/clients/${Constants.CLIENT_ID}${url}`,
      {
        headers,
        params: data,
      }
    );
    return result;
  },
};
