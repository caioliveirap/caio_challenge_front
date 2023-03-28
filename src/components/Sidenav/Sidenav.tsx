import { Layout, Menu } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';
import TractianLogo from '../../assets/tractian-logo.svg';
import './Sidenav.scss';
const { Sider } = Layout;

type SidenavProps = {
	collapsed: boolean;
};

export const Sidenav = ({ collapsed }: SidenavProps) => {
	const sidenavItems = [
		{
			key: '1',
			icon: <AiOutlineUser />,
			label: 'User',
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
				defaultSelectedKeys={['1']}
				items={sidenavItems}
			/>
		</Sider>
	);
};
