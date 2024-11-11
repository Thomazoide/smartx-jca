fetch("https://www.smartxhub.cloud/jdata/action/transfer/def/out/update", {
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
    "body": "{\"id\":\"\",\"outToCustodyId\":\"221766\",\"outOnDate\":\"2024-11-11 11:43\",\"outToZoneId\":\"395337\",\"inReviewDate\":\"\",\"outApproval\":\"auto\",\"apSignature\":\"data:image/png;base64,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\",\"outNotes\":\"\",\"items\":[2419352]}",
    "method": "POST"
  });

export interface trasferBody{
    id?: number
    outToCustodyId: number
    outOnDate: string
    outToZoneId: number
    inReviewDate?: string
    outApproval: string
    apSignature: Base64URLString
}