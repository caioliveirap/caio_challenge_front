import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { WorkorderCard } from 'src/pages/Workorders/Components/WorkorderCard/WorkorderCard';
import { getAllUsers } from 'src/services/users/users.service';
import { getAllWorkorders } from 'src/services/workorders/workorders.service';
import { TabTitle } from 'src/utils';

import './workorder.scss';

export const Workorder = () => {
	TabTitle('Ordens de Serviço');
	const { isLoading, data } = useQuery('workordersList', async () => {
		const result = await getAllWorkorders();
		return result;
	});

	const { isLoading: isLoadingUser, data: userData } = useQuery(
		'usersList',
		async () => {
			const result = await getAllUsers();
			return result;
		}
	);
	if (isLoading || isLoadingUser) return <Loading />;

	return (
		<div className="workorders">
			{data?.map((workorder) => {
				return <WorkorderCard workorderInfo={workorder} userList={userData} />;
			})}
		</div>
	);
};
