import { item } from "../components/page/RegContent";

// export type oneGroup = {
//     agroupName: string
// }
// export const oneGroupDefaultValue: oneGroup = {
//     agroupName: ""
// }

export interface oneGroup {
    agroupName: string
}

export type adGroup = {
    agroupId: string,
    agroupName: string,
}

export const adGroupDefaultValue: adGroup = {
    agroupId: "",
    agroupName: "",
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

export type keywordTable = {
    key: number,
	kwdName: string,
	bidCost: string,
}

export const KeywordTableDefaultValue: keywordTable = {
	key: 0,
	kwdName: "",
	bidCost: "0"
}


export interface keyword {
    kwdName: string,
    sellPossKwdYn: number,
    manualCnrKwdYn: number
}

export interface keywordDefaultValue {
    kwdName: "",
    sellPossKwdYn: 0,
    manualCnrKwdYn: 0

}

