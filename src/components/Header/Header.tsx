import { Layout } from 'antd';
import { AiOutlineMenuFold } from 'react-icons/ai';
import './Header.scss';
const { Header } = Layout;

type HeaderProps = {
	triggerCollapse: () => void;
};

export const HeaderComponent = ({ triggerCollapse }: HeaderProps) => {
	return (
		<Header className="header">
			<AiOutlineMenuFold size={20} cursor="pointer" onClick={triggerCollapse} />
		</Header>
	);
};
