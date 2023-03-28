import { Layout } from 'antd';
import { AiOutlineMenuFold } from 'react-icons/ai';

const { Header } = Layout;

type HeaderProps = {
	triggerCollapse: () => void;
};

export const HeaderComponent = ({ triggerCollapse }: HeaderProps) => {
	return (
		<Header
			style={{
				background: 'white',
				padding: '16px',
				lineHeight: 'initial',
				display: 'flex',
			}}
		>
			<AiOutlineMenuFold onClick={triggerCollapse} />
		</Header>
	);
};
