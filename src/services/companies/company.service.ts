import api from '../api.config';
import { ApiException } from '../api.exception';

export interface ICompany {
	id: number;
	name: string;
}

export const getAllCompanies = async (): Promise<ICompany[]> => {
	try {
		const requests = await api.get('/companies');
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const getSingleCompany = async (id: number): Promise<ICompany> => {
	try {
		const requests = await api.get(`/companies/${id}`);
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};
