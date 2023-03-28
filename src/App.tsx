import { ConfigProvider } from 'antd';
import ptBR from 'antd/locale/pt_BR';
import 'antd/dist/reset.css';
import { DatePicker, message } from 'antd';

function App() {
	const handleChange = (value: any) => {
		message.info(
			`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`
		);
	};
	return (
		<ConfigProvider locale={ptBR}>
			<DatePicker onChange={handleChange} />
		</ConfigProvider>
	);
}

export default App;
