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

export interface adGroupItem {
    index: number,
    agroupId: number,
    agroupName: string,
    regTime: string,
    agroupUseConfigYn: number,
    adActYn: number,
    adUseConfigYn: number,
    agroupUseConfigYnSrt: string,
    itemCnt: string,
}

export const adGroupItemDefaultValue: adGroupItem = {
    index: 0,
    agroupId: 0,
    agroupName: "",
    regTime: "",
    agroupUseConfigYn: 0,
    adActYn: 0,
    adUseConfigYn: 0,
    agroupUseConfigYnSrt: "",
    itemCnt: "",
}