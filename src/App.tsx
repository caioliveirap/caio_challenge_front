import { ConfigProvider, Layout } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import './App.css';
import 'antd/dist/reset.css';
import { ProjectRoutes } from './routes';
import { Sidenav } from './components/Sidenav';

function App() {
	return (
		<ConfigProvider locale={ptBR}>
			<Layout style={{ minHeight: '100vh' }}>
				<Sidenav />
			</Layout>
			{/* <ProjectRoutes /> */}
		</ConfigProvider>
	);
}

export default App;
