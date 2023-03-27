export type item = {
    key: number,
    itemId: number,
    itemNo: string,
    itemName: string,
    adultYn: string,
    itemOrgCost: number,
    itemActYn: string
}

export const itemDefaultValue: item = {
    key: 0,
    itemId: 0,
    itemNo: "",
    itemName:"", 
    adultYn: "", 
    itemOrgCost: 0, 
    itemActYn: ""
}

export type mngItem = {
    index: number,
    adId: number,
    agroupId: number,
    advId: string,
    adUseConfigYn: number,
    adUseConfigYnStr: string,
    adActYn: number,
    regTime: string,
    itemId: number,
    itemNo: string,
    itemName: string,
    itemActYn: number,
}

export const mngItemDefaultValue: mngItem = {
    index: 0,
    adId: 0,
    agroupId: 0,
    advId: "",
    adUseConfigYn: 0,
    adUseConfigYnStr: "",
    adActYn: 0,
    regTime: "",
    itemId: 0,
    itemNo: "",
    itemName: "",
    itemActYn: 0,
}