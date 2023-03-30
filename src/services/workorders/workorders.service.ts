// import { AxiosRequestConfig } from 'axios';
import api from '../api.config';
import { ApiException } from '../api.exception';

// export interface IAssets {
// 	assignedUserIds: number[];
// 	companyId: number;
// 	healthHistory: any;
// 	healthscore: number;
// 	id: number;
// 	image: string;
// 	metrics: IMetrics;
// 	model: string;
// 	name: string;
// 	sensors: string[];
// 	specifications: ISpecifications;
// 	status: string;
// 	unitId: number;
// }

// export interface IMetrics {
// 	lastUptimeAt: string;
// 	totalCollectsUptime: number;
// 	totalUptime: number;
// }

// export interface ISpecifications {
// 	maxTemp: number;
// 	power?: number;
// 	rpm?: number;
// }

export const getAllWorkorders = async (): Promise<any[]> => {
	try {
		const requests = await api.get('/workorders');
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};

export const getSingleWorkorder = async (assetId: number): Promise<any> => {
	try {
		const requests = await api.get(`/workorders/${assetId}`);
		return requests.data;
	} catch (error: any) {
		throw new ApiException(error.message);
	}
};
