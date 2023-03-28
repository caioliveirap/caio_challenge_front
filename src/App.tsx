import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import 'antd/dist/reset.css';
import { ProjectRoutes } from './routes';

function App() {
	return (
		<ConfigProvider locale={ptBR}>
			<ProjectRoutes />
		</ConfigProvider>
	);
}

export default App;
