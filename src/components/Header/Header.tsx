import { Layout } from 'antd';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { useQuery } from 'react-query';
import {
	getAllCompanies,
	getSingleCompany,
} from 'src/services/companies/company.service';

import { Loading } from '../LoadingComponent/Loading';
import './Header.scss';

const { Header } = Layout;

type HeaderProps = {
	triggerCollapse: () => void;
};

export const HeaderComponent = ({ triggerCollapse }: HeaderProps) => {
	const { isLoading, data } = useQuery('company', async () => {
		const request = await getSingleCompany(1);
		return request;
	});

	return (
		<Header className="header">
			<AiOutlineMenuFold size={20} cursor="pointer" onClick={triggerCollapse} />
			<div className="header__company">
				{data ? (
					<span className="header__title">{data.name}</span>
				) : (
					<Loading />
				)}
			</div>
		</Header>
	);
};
