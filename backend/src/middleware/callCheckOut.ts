import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetCookies, SmartXPayload } from "./call_login";

fetch("https://www.smartxhub.cloud/jdata/action/check/out/update", {
    "headers": {
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
      "cookie": "org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=es; lg=es; JSESSIONID=195441BAC297F753590D2B418FC72150; cf_clearance=9IWlw5qC07xT2t7z6YE5EMtWYEezie1RUfjPoJhTzgI-1731334170-1.2.1.1-KyEk9HladCQ_ugQ1N_8MAKnDsaY3gbOOFPODF.rEpW5BWZ_xUn1varIkxDiiE5trQnqtQ9tWR_Dl6OopJ.zf9B_623Z.ltYqET1_YwNEyQJBNonMRXE_aWj1asSCAKmOMiKwDw6B48X9SrmyDZZ36wovXv3wEWIW8UojtiAtLMyJvgEekZBY8F.t_078_tL15m1iQ1mGmZszEX9SFkeTS.TNsltrgupgZekF2FuosWANC81EwUJXh5YNqDkREQHa41dYuK2lulsK5X86JiGsX6j1MqEi4iIJzqluuULXvEUgaCYDXtn51n5pctW8JIO3YzUmop8jQqxwhfLyvkZEoFxCfW.6jdeGPrnGMMdjv87OFOWPDysyJA3TVWudfaHz6rwll9.MT6zqeKK6Wm8bjA",
      "Referer": "https://www.smartxhub.cloud/gen/viewItems",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"id\":\"\",\"flow\":\"false\",\"outCustodyId\":\"\",\"outZoneId\":\"395365\",\"outOnDate\":\"2024-11-11 11:23\",\"outDueDate\":\"2024-11-18 11:23\",\"outNotes\":\"\",\"outApproval\":\"auto\",\"apInstructions\":\"\",\"apSignature\":\"\",\"items\":[2424839],\"retLocals\":\"\",\"retCustodies\":\"\",\"retDispositions\":\"\"}",
    "method": "POST"
});

export interface checkOutBody{
    id?: number
    flow: boolean
    outCustodyId?: number
    outZoneId?: number
    outOnDate: string
    outDueDate: string
    outNotes?: string
    outApproval: string
    apInstructions?: string
    apSignature?: string
    items: number[]
    retLocals?: string
    retCustodies?: string
    retDispositions?: string
}

export async function CallCheckOut(payload: checkOutBody) {
    const cookies: SmartXPayload = await GetCookies()
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/action/check/out/update"
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
            "cookie": `org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=es; lg=es; JSESSIONID=${cookies.jsessionID}; cf_clearance=${cookies.cfClearence}`,
            "Referer": "https://www.smartxhub.cloud/gen/viewItems",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }
    const response: AxiosResponse = await axios.post(ENDPOINT, payload, CONFIG)
    return response
}