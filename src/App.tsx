import { ConfigProvider, Layout } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import './App.scss';
import 'antd/dist/reset.css';
import { ProjectRoutes } from './routes';
import { Sidenav } from './components/Sidenav/Sidenav';
import { HeaderComponent } from './components/Header/Header';
import { useState } from 'react';

function App() {
	const [isSidenavCollapsed, setCollapsed] = useState(false);

	return (
		<ConfigProvider locale={ptBR}>
			<Layout style={{ minHeight: '100vh' }}>
				<Sidenav collapsed={isSidenavCollapsed} />
				<Layout>
					<HeaderComponent
						triggerCollapse={() => {
							setCollapsed(!isSidenavCollapsed);
						}}
					/>
				</Layout>
			</Layout>
			{/* <ProjectRoutes /> */}
		</ConfigProvider>
	);
}

export default App;
