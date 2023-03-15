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
