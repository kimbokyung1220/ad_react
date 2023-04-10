export type dadRptDetail = {
    index: number,
    dadDetId: number,
    basicDate: string,
    impCnt: number,
    clickCnt: number,
    clickPercent: number,
    clickPercentStr: string,
    avgImpRank: number,
    avgCpc: number,
    adSpend: number,
    adSpendStr: string
}

export const dadRptDetailDefaultValue: dadRptDetail = {
    index: 0,
    dadDetId: 0,
    basicDate: "",
    impCnt: 0,
    clickCnt: 0,
    clickPercent: 0,
    clickPercentStr: "",
    avgImpRank: 0 ,
    avgCpc: 0,
    adSpend: 0,
    adSpendStr: ""
}
