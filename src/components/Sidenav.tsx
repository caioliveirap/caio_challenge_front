import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;

export const Sidenav = () => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}></Sider>
		</Layout>
	);
};
