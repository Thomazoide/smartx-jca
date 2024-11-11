import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetCookies, SmartXPayload } from "./call_login";

export async function GetAllItems(): Promise<unknown>{
    const cookies: SmartXPayload = await GetCookies()
    const cookieHeader: string = `JSESSIONID=${cookies.jsessionID};cf_clearence=${cookies.cfClearence}`
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/items/findItems?sort=lastSeen&order=desc&offset=0&limit=25&_=1730736930392"
    const CONFIG: AxiosRequestConfig = {
        headers: {
            Cookie: cookieHeader
        }
    }
    const response: AxiosResponse = await axios.get(ENDPOINT, CONFIG)
    console.log(response.data)
    return response.data
}