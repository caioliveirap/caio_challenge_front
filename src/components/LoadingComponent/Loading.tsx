import { Spin } from 'antd';

import './Loading.scss';

export const Loading = () => {
	return (
		<div className="loading__container">
			<Spin size="large" tip="Loading..." />
		</div>
	);
};
