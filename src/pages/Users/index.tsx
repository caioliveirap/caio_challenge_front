import { Button, Modal, message } from 'antd';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { UserFormComponent } from 'src/pages/Users/Components/UserForm/UserForm';
import UserTableComponent from 'src/pages/Users/Components/UsersTable/UserTable';
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

			<UserTableComponent
				initialData={data}
				showEditModal={showEditModal}
				setUserSelected={setUserSelected}
			/>

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
