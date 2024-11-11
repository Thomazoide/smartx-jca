import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetCookies, SmartXPayload } from "./call_login";

export interface serviceRequestBody{
    id: number
    unique: boolean
    items: number[]
    title: string
    description: string
    procedureChecklistId: number
    notes: string
    frquency: string
    monthDay: number
    plannedDate: string
    startDateBefore: number
    maintenanceStatus: number
    plannedCur: string
    plannedCost: string
    local: string
    manType: number
    priority: number
    assignedToUserId: number
    weekDays: Array<any>
    duration: any
}

export async function requestService(payload: serviceRequestBody){
    const cookies: SmartXPayload = await GetCookies()
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/scheduler/add"
    const CONFIG: AxiosRequestConfig = {
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "accept-language": "es-419,es;q=0.9,es-ES;q=0.8,en;q=0.7,en-GB;q=0.6,en-US;q=0.5,pl;q=0.4,es-CL;q=0.3",
            "content-type": "application/json",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Chromium\";v=\"130\", \"Microsoft Edge\";v=\"130\", \"Not?A_Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
            "cookie": `cf_clearance=${cookies.cfClearence}; JSESSIONID=${cookies.jsessionID}; org.springframework.web.servlet.i18n.CookieLocaleResolver.LOCALE=es; lg=es`,
            "Referer": "https://www.smartxhub.cloud/gen/viewItems",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        }
    }
    const response: AxiosResponse = await axios.post(ENDPOINT, payload, CONFIG)
    return response
}