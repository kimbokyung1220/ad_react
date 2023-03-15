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