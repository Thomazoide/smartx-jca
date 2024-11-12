import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetCookies, SmartXPayload } from "./call_login";

interface IconInterface{
    icon: string
    url: string
}

export interface item{
    id: number
    notes: string
    active: boolean
    searched: boolean
    createdDate: string
    createdBy: string
    name: string
    latitude: string
    longitude: string
    modifiedBy: string
    modifiedDate: string
    lastSeen: string
    code: string
    property: string
    serial: string
    brand: string
    model: string
    purForm: string
    purCost: number
    purCostCur: string
    purReplace: number
    purReplaceCur: string
    purOrder: string
    depEnabled: boolean
    depMonths: number
    depCost: number
    depSelvage: number
    depStop: boolean
    objConditionId: number
    objCustodyAssigId: number
    objCustodyOwnerId: number
    objDispositionId: number
    objCategoryId: number
    objDepartmentId: number
    objGroupId: number
    zoneCurrentId: number
    zoneHomeId: number
    objTypeId: number
    objCostCenterId: number
    objCondition: {
        id: number
        name: string
        color: string
        icon: IconInterface
        named: string
    }
    objDisposition: {
        id: number
        name: string
        icon: IconInterface
        i18n: string
        color: string
        named: string
    }
    objDepartment: {
        id: number
        name: string
        named: string
    }
    objCategory: {
        id: number
        name: string
        icon: IconInterface
        named: string
    }
    objGroup: {
        id: number
        name: string
        named: string
    }
    objType: {
        id: number
        icon: IconInterface
        i18n: string
    }
    objCostCenter: {
        id: number
        name: string
        named: string
    }
    areaCurrent: {
        id: number
        code: string
        description: string
        locationSite: {
            id: number
            code: string
            name: string
            named: string
        }
        latitude: string
        longitude: string
        named: string
    }
    areaHome: {
        id: number
        code: string
        description: string
        locationSite: {
            id: number
            code: string
            name: string
            named: string
        }
        latitude: string
        loongitude: string
        named: string
    }
    zoneCurrent: {
        id: number
        code: string
        definition: string
        description: string
        notes: string
        latitude: string
        longitude: string
        responsible: string
        named: string
    }
    zoneHome: {
        id: number
        code: string
        definition: string
        description: string
        notes: string
        latitude: string
        longitude: string
        responsible: string
        named: string
    }
    objCustodyAssig: {
        id: number
        name: string
        named: string
    }
    objCustodyOwner: {
        id: number
        name: string
        named: string
    }
    marker: string
    recent: boolean
    elements: []
    objCustomFields: []
    flexibleFieldValue1: string
    flexibleFieldValue2: string
    flexibleFieldValue3: string
    flexibleFieldValue4: string
    flexibleFieldValue5: string
    flexibleFieldValue6: string
    flexibleFieldValue7: string
    flexibleFieldValue8: string
    flexibleFieldValue9: string
    flexibleFieldValue10: string
    flexibleFieldValue11: string
    flexibleFieldValue12: string
    flexibleFieldValue13: string
    flexibleFieldValue14: string
    flexibleFieldValue15: string
    flexibleFieldValue16: string
    flexibleFieldValue17: string
    flexibleFieldValue18: string
    flexibleFieldValue19: string
    flexibleFieldValue20: string
    lot: string
    criticalityIndex: string
    classification: string
    technicalLocation: string
    auditAudited: boolean
    alarmed: boolean
    misplacedItem: boolean
    hasTags: boolean
    hasBles: boolean
    hasNotImage: boolean
    hasAlert: boolean
    alertMsg: string
    hasWaning: boolean
    warningMsg: string
    tokens: string
    pathHome: string
    pathCurrent: string
    pathImage: string
    tagsRfidIds: string
    tagsLabelsBeacons: string
    named: string
}

interface itemRequestResponse{
    total: number
    rows: item[]
}

export async function GetAllItems(): Promise<item[]>{
    const cookies: SmartXPayload = await GetCookies()
    const cookieHeader: string = `JSESSIONID=${cookies.jsessionID};cf_clearence=${cookies.cfClearence}`
    const ENDPOINT: string = "https://www.smartxhub.cloud/jdata/items/findItems?sort=lastSeen&order=desc&offset=0&limit=25&_=1730736930392"
    const CONFIG: AxiosRequestConfig = {
        headers: {
            Cookie: cookieHeader
        }
    }
    const response: AxiosResponse<itemRequestResponse> = await axios.get<itemRequestResponse>(ENDPOINT, CONFIG)
    console.log(response.data)
    return response.data.rows
}