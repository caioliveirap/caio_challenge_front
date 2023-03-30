import { Layout, Menu } from 'antd';
import {
	AiOutlineBank,
	AiOutlineLayout,
	AiOutlineSetting,
	AiOutlineUnorderedList,
	AiOutlineUser,
} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

import TractianLogo from '../../assets/tractian-logo.svg';
import './Sidenav.scss';

const { Sider } = Layout;

type SidenavProps = {
	collapsed: boolean;
};

export const Sidenav = ({ collapsed }: SidenavProps) => {
	const navigate = useNavigate();
	const sidenavItems = [
		{
			key: '/',
			icon: <AiOutlineLayout />,
			label: 'Dashboard',
			path: '/',
		},
		{
			key: '/ativos',
			icon: <AiOutlineSetting />,
			label: 'Ativos',
			path: '/ativos',
		},
		{
			key: '/ordem-de-servico',
			icon: <AiOutlineUnorderedList />,
			label: 'Ordens de serviço',
			path: 'ordem-de-servico',
		},
		{
			key: '/usuarios',
			icon: <AiOutlineUser />,
			label: 'Usuários',
			path: 'usuarios',
		},
		{
			key: '/unidades',
			icon: <AiOutlineBank />,
			label: 'Unidades',
			path: 'unidades',
		},
	];
	return (
		<Sider trigger={null} collapsible collapsed={collapsed}>
			<div className="sidenav-logo">
				<img
					src={TractianLogo}
					alt="Logo da tractian"
					className={`logo ${collapsed ? 'collapsed' : ''}`}
				/>
			</div>

			<Menu
				theme="dark"
				mode="inline"
				items={sidenavItems}
				onClick={({ key }) => {
					navigate(key);
				}}
			/>
		</Sider>
	);
};
