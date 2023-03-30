import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { WorkorderCard } from 'src/components/WorkorderCard/WorkorderCard';
import { getAllWorkorders } from 'src/services/workorders/workorders.service';

import './workorder.scss';

export const Workorder = () => {
	const { isLoading, data } = useQuery('workordersList', async () => {
		const result = await getAllWorkorders();
		return result;
	});

	if (isLoading) return <Loading />;

	return (
		<div className="workorders">
			{data?.map((workorder) => {
				return <WorkorderCard workorderInfo={workorder} />;
			})}
		</div>
	);
};
