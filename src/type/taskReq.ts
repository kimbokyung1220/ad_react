export type taskReqList = {
	taskReqId: number,
	memberId: string,
	taskStatus: string,
	taskStatusStr: string,
	taskName: string,
	taskReqFilePath: string,
	taskReqTime: string,
}

export const taskReqListDefaultValue: taskReqList = {
    taskReqId: 0,
	memberId: "",
	taskStatus: "",
	taskStatusStr: "",
	taskName: "",
	taskReqFilePath: "",
	taskReqTime: "",
}
