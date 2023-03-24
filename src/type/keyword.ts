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
export type mngKeywordList = {
     adId : number,
     agroupId : number,
     adUseConfigYn : number,
     adActYn : number,
     regTime :  string,
     dadDetId : number,
     dadActYn : number,
     dadUseConfigYn : number,
     kwdId : number,
     kwdName : string
}
export const mngKeywordListDefaultValue: mngKeywordList = {
    adId :  0,
    agroupId :  0,
    adUseConfigYn :  0,
    adActYn :  0,
    regTime :  "",
    dadDetId :  0,
    dadActYn :  0,
    dadUseConfigYn :  0,
    kwdId :  0,
    kwdName : ""
}