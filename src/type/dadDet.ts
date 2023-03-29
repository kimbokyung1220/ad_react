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