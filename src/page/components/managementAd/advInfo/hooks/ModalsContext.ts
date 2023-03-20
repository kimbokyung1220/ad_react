import { createContext } from "react";

interface dayBudgetModalContext {
    isModalOpen: boolean,
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
	// dayLimitBudget: number
	// setDayLimitBudget: React.Dispatch<React.SetStateAction<number>>
}

const dayBudgetModalContextDefaultValue: dayBudgetModalContext = {
    isModalOpen: true,
	setIsModalOpen: () => { },
	// dayLimitBudget: 0,
	// setDayLimitBudget: () => { },
}

export const ModalContext = createContext(dayBudgetModalContextDefaultValue);