import api from '../api.config';
import { ApiException } from '../api.exception';

export type NoticeType = 'info' | 'success' | 'error' | 'warning' | 'loading';

export interface IUser {
	id: number;
	type?: 'user' | 'admin';
	email: string;
	name: string;
	unitId: number;
	companyId: number;
}

export const getAllUsers = async (): Promise<IUser[]> => {
	try {
		const requests = await api.get('/users');
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const getSingleUser = async (id: number): Promise<IUser> => {
	try {
		const requests = await api.get(`/users/${id}`);
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const addNewUser = async (body: IUser): Promise<unknown> => {
	try {
		const requests = await api.post(`/users`, body);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const updateUser = async (id: number, body: IUser): Promise<unknown> => {
	try {
		const requests = await api.put(`/users/${id}`, body);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const deleteUser = async (id: number): Promise<unknown> => {
	try {
		const requests = await api.delete(`/users/${id}`);
		return requests;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};
