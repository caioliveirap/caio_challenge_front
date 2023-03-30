import { Avatar, Card, Progress, Tag, Tooltip } from 'antd';
import { useState } from 'react';

import './WorkorderCard.scss';

export const WorkorderCard = ({ workorderInfo }: any) => {
	const [workorder, setWorkorder] = useState(workorderInfo);
	const countCompletedTasks = (
		tasks: { completed: boolean; task: string }[]
	): number => {
		return Math.ceil(
			(tasks.reduce(
				(completedCount, task) =>
					task.completed ? completedCount + 1 : completedCount,
				0
			) /
				workorder.checklist.length) *
				100
		);
	};
	const statusTags: any = {
		high: <Tag color="red">Alta</Tag>,
		medium: <Tag color="blue">Média</Tag>,
		low: <Tag color="green">Baixa</Tag>,
	};

	return (
		<div className="workorder-card">
			<Card
				style={{ width: '100%', display: 'flex', flexDirection: 'column' }}
				bodyStyle={{ padding: '0', width: '100%' }}
			>
				<div className="workorder-card__container">
					<div className="workorder-card__title">
						<span className="order-number">#{workorder.id}</span>
						<span className="title">{workorder.title}</span>
					</div>
					<span className="workorder-card__description">Testet</span>
					<div className="workorder-card__content">
						<div className="progress">
							Progresso
							<ul>
								{workorder.checklist.map((item: any) => {
									return (
										<li className={`${item.completed ? 'completed' : ''}`}>
											{item.task}
										</li>
									);
								})}
							</ul>
						</div>
						<div>
							Status
							<Progress
								style={{ margin: 0 }}
								percent={countCompletedTasks(workorder.checklist)}
							/>
						</div>
						<div className="users">
							Usuários
							<Avatar.Group>
								<Tooltip title="Ant User" placement="top">
									<Avatar style={{ backgroundColor: '#87d068' }} icon={'K'} />
								</Tooltip>
								<Tooltip title="Ant User" placement="top">
									<Avatar style={{ backgroundColor: '#87d068' }} icon={'K'} />
								</Tooltip>
							</Avatar.Group>
						</div>
						<div className="priority">
							Prioridade
							{statusTags[workorder.priority]}
						</div>
					</div>
				</div>
			</Card>
		</div>
	);
};
