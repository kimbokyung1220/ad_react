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
    key: Math.floor(Math.random() * 101),
    itemId: 0,
    itemNo: "",
    itemName:"", 
    adultYn: "", 
    itemOrgCost: 0, 
    itemActYn: ""
}

export type mngItemList = {
    adId: number,
    agroupId: number,
    advId: string,
    adUseConfigYn: number,
    adActYn: number,
    regTime: string,
    itemId: number,
    itemNo: string,
    itemName: string,
    itemActYn: number,
}

export const mngItemListDefaultValue: mngItemList = {
    adId: 0,
    agroupId: 0,
    advId: "",
    adUseConfigYn: 0,
    adActYn: 0,
    regTime: "",
    itemId: 0,
    itemNo: "",
    itemName: "",
    itemActYn: 0,
}