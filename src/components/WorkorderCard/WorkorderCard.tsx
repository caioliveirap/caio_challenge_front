import { Avatar, Card, Progress, Tag, Tooltip } from 'antd';
import { useState } from 'react';
import { IUser } from 'src/services/users/users.service';
import {
	IChecklistItem,
	IWorkOrder,
} from 'src/services/workorders/workorders.service';
import { getInitials } from 'src/utils';

import './WorkorderCard.scss';

type WorkorderProps = {
	workorderInfo: IWorkOrder;
	userList: IUser[] | undefined;
};

export const WorkorderCard = ({ workorderInfo, userList }: WorkorderProps) => {
	const [workorder, setWorkorder] = useState(workorderInfo);
	const [userFilteredList, setUserList] = useState(workorderInfo);

	const countCompletedTasks = (tasks: IChecklistItem[]): number => {
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

	const checkUsers = (userlist: IUser[]): IUser[] => {
		console.log(
			workorder,
			userlist.filter((user) => {
				if (workorder.assignedUserIds.includes(user.id)) {
					return user;
				}
			})
		);
		return userlist.filter((user) => {
			if (workorder.assignedUserIds.includes(user.id)) {
				return user;
			}
		});
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
								{userList &&
									checkUsers(userList).map((item) => {
										return (
											<Tooltip title={item.name} placement="top">
												<Avatar
													style={{ backgroundColor: '#87d068' }}
													icon={getInitials(item.name)}
												/>
											</Tooltip>
										);
									})}
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
