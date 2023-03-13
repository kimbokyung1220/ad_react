import { item } from "../components/page/RegContent";


export type adGroup = {
    agroupId: number,
    agroupName: string,
    regTime : string,
    agroupActYn: number,
    agroupUseYn: number
}

export const itemDefaultValue: item = {
    key: Math.floor(Math.random() * 101),
    itemNo: "",
    itemName:"", 
    adultYn: 0, 
    itemOrgCost: 0, 
    itemActYn: 0
}

export type keywordTable = {
    key: number,
	kwdName: string,
	bidCost: string
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