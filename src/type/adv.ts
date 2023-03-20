export interface advInfo {
    advId: string,
    adIngActYn: number,
    balance: number,
    // chargingAmount: number,
    eventMoneyBalance: number,
    dayLimitBudget: number,
    chargingAmountStatus: string,
    dayLimitBudgetStatus: string,
    msg: string | null
}

export const advInfoDefaultValue: advInfo = {
    advId: "",
    adIngActYn: 0,
    balance: 0,
    // chargingAmount: number,
    eventMoneyBalance: 0,
    dayLimitBudget: 0,
    chargingAmountStatus: "",
    dayLimitBudgetStatus: "",
    msg: null
}