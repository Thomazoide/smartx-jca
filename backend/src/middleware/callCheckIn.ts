import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetCookies, SmartXPayload } from "./call_login";

export interface checkInBody{
    id?: number
    inCustodyId?: number
    inReturnDate: string
    outApproval: string
    inSignature?: any
    inNotes?: string
    items: number[]
}

export async function validateForCheckIn(itemID: number) {
    const cookies: SmartXPayload = await GetCookies()
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/action/check/in/validate"
    const CONFIG: AxiosRequestConfig = {
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5,pl;q=0.4,es-CL;q=0.3",
            "content-type": "application/json;charset=UTF-8",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=es; lg=es; cf_clearance=${cookies.cfClearence}; JSESSIONID=${cookies.jsessionID}`,
            "Referer": "https://www.smartxhub.cloud/gen/viewItems",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }
    const response: AxiosResponse = await axios.post(ENDPOINT, [itemID], CONFIG)
    return response
}

export async function CallCheckIn(payload: checkInBody){
    const cookies: SmartXPayload = await GetCookies()
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/action/check/in/update"
    const CONFIG: AxiosRequestConfig = {
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5,pl;q=0.4,es-CL;q=0.3",
            "content-type": "application/json;charset=UTF-8",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=es; lg=es; cf_clearance=${cookies.cfClearence}; JSESSIONID=${cookies.jsessionID}`,
            "Referer": "https://www.smartxhub.cloud/gen/viewItems",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }
    const response: AxiosResponse = await axios.post(ENDPOINT, payload, CONFIG)
    return response
}