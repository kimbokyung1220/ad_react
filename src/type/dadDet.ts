export interface ispAdKwdList {
    cnrReqId: number,
    dadDetId: number,
    itemId: number,
    itemName: string,
    kwdId: number,
    kwdName: string,
    reasonForIsp: string
}

export const ispAdKwdListDefaultValue: ispAdKwdList = {
    cnrReqId: 0,
    dadDetId: 0,
    itemId: 0,
    itemName: "",
    kwdId: 0,
    kwdName: "",
    reasonForIsp: ""
}

export interface csAdList {
    cnrReqId: number,
    dadDetId: number,
    itemName: string,
    kwdName: string,
    adultYn: number,

}

export const csAdListDefaultValue: csAdList = {
    cnrReqId: 0,
    dadDetId: 0,
    itemName: "",
    kwdName: "",
    adultYn: 0,
}
