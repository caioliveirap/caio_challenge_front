import { ConfigProvider, Layout } from 'antd';
import 'antd/dist/reset.css';
import ptBR from 'antd/locale/pt_BR';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import './App.scss';
import { HeaderComponent } from './components/Header/Header';
import { Sidenav } from './components/Sidenav/Sidenav';
import { ProjectRoutes } from './routes';

const queryClient = new QueryClient();

function App() {
	const [isSidenavCollapsed, setCollapsed] = useState(false);

	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<ConfigProvider locale={ptBR}>
					<Layout style={{ minHeight: '100vh' }}>
						<Sidenav collapsed={isSidenavCollapsed} />
						<Layout>
							<HeaderComponent
								triggerCollapse={() => {
									setCollapsed(!isSidenavCollapsed);
								}}
							/>
							<div className="routes-wrapper">
								<ProjectRoutes />
							</div>
						</Layout>
					</Layout>
				</ConfigProvider>
			</QueryClientProvider>
		</BrowserRouter>
	);
}

export default App;
