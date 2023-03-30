import { Button, Modal, Table, message } from 'antd';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { UserFormComponent } from 'src/components/UserForm/UserForm';
import {
	IUser,
	NoticeType,
	getAllUsers,
} from 'src/services/users/users.service';

import './users.scss';

export const Users = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const [userSelected, setUserSelected] = useState<IUser>();

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const showEditModal = () => {
		setIsEditModalOpen(true);
	};

	const handleEditOk = () => {
		setIsEditModalOpen(false);
	};

	const handleEditCancel = () => {
		setIsEditModalOpen(false);
	};

	const showMessage = (type: NoticeType, message: string) => {
		messageApi.open({
			type: type,
			content: message,
		});
	};

	const usersColumns = [
		{
			title: 'Usuário',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'E-Mail',
			dataIndex: 'email',
			key: 'email',
		},
		{
			title: 'ID da Unidade',
			dataIndex: 'unitId',
			key: 'unitId',
		},
		{
			title: 'ID do Usuário',
			dataIndex: 'companyId',
			key: 'companyId',
		},
		{
			title: 'ID da Empresa',
			dataIndex: 'companyId',
			key: 'companyId',
		},
		{
			title: 'Edit',
			dataIndex: 'companyId',
			render: (text: any, record: any, index: any) => {
				return (
					<Button
						type="primary"
						onClick={() => {
							setUserSelected(data?.[index]);
							showEditModal();
						}}
					>
						Editar
					</Button>
				);
			},
		},
	];

	const { isLoading, data } = useQuery('usersList', async () => {
		const result = await getAllUsers();
		return result;
	});

	if (isLoading) return <Loading />;
	return (
		<div className="users">
			{contextHolder}

			<div className="users__header">
				<h1 className="title">Usuários</h1>
				<Button type="primary" onClick={showModal}>
					<RiAddFill size={16} />
					Adicionar Usuário
				</Button>
			</div>

			<Table dataSource={data} columns={usersColumns} />

			<Modal
				title="Adicionar novo usuário"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<UserFormComponent
					autoCloseModal={handleCancel}
					showMessage={showMessage}
				/>
			</Modal>
			<Modal
				title={`Editar usuário: ${userSelected?.name}`}
				open={isEditModalOpen}
				onOk={handleEditOk}
				onCancel={handleEditCancel}
				footer={null}
				destroyOnClose
			>
				<UserFormComponent
					autoCloseModal={handleEditCancel}
					showMessage={showMessage}
					initialValues={userSelected}
				/>
			</Modal>
		</div>
	);
};
