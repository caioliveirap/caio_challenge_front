import api from '../api.config';
import { ApiException } from '../api.exception';

export interface IUnit {
	id: number;
	name: string;
	companyId: number;
}

export const getAllUnits = async (): Promise<IUnit[]> => {
	try {
		const requests = await api.get('/units');
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const getSingleUnit = async (id: number): Promise<IUnit> => {
	try {
		const requests = await api.get(`/units/${id}`);
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const addNewUnit = async (body: IUnit): Promise<unknown> => {
	try {
		const requests = await api.post(`/units`, body);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const updateUnit = async (id: number, body: IUnit): Promise<unknown> => {
	try {
		const requests = await api.put(`/units/${id}`, body);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const deleteUnit = async (id: number): Promise<unknown> => {
	try {
		const requests = await api.delete(`/units/${id}`);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};
