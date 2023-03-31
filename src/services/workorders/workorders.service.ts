// import { AxiosRequestConfig } from 'axios';
import api from '../api.config';
import { ApiException } from '../api.exception';

export type IChecklistItem = {
	completed: boolean;
	task: string;
};

export type IWorkOrder = {
	assetId: number;
	assignedUserIds: number[];
	checklist: IChecklistItem[];
	description: string;
	id: number;
	priority: string;
	status: string;
	title: string;
};

export const getAllWorkorders = async (): Promise<IWorkOrder[]> => {
	try {
		const requests = await api.get('/workorders');
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const getSingleWorkorder = async (
	assetId: number
): Promise<IWorkOrder> => {
	try {
		const requests = await api.get(`/workorders/${assetId}`);
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};
