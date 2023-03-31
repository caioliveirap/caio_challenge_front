import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import {
	IUser,
	NoticeType,
	addNewUser,
	updateUser,
} from 'src/services/users/users.service';

import './UserForm.scss';

type UserFormProps = {
	autoCloseModal: () => void;
	initialValues?: IUser;
	showMessage: (type: NoticeType, message: string) => void;
};

export const UserFormComponent = ({
	autoCloseModal,
	initialValues,
	showMessage,
}: UserFormProps) => {
	const [loading, setLoading] = useState(false);

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			await addNewUser(values);
			showMessage('success', 'Usuário adicionado com sucesso');
			setLoading(false);
			autoCloseModal();
		} catch (error) {
			setLoading(false);
			showMessage('error', 'Erro ao adicionar usuário');
		}
	};

	const onFinishEdit = async (values: any) => {
		setLoading(true);
		try {
			if (initialValues) {
				await updateUser(initialValues.id, values);
			}
			showMessage('success', 'Usuário editado com sucesso');
			setLoading(false);
			autoCloseModal();
		} catch (error) {
			setLoading(false);
			showMessage('error', 'Erro ao editar usuário');
		}
	};

	return (
		<>
			<Form
				name="basic"
				initialValues={initialValues}
				onFinish={initialValues ? onFinishEdit : onFinish}
				autoComplete="off"
				layout="vertical"
			>
				<Form.Item
					label="Email"
					name="email"
					rules={[
						{
							required: true,
							message: 'Por favor insira o email do usuário!',
						},
						{
							type: 'email',
							message: 'Por favor insira um email válido!',
						},
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="Nome"
					name="name"
					rules={[
						{ required: true, message: 'Por favor insira o nome do usuário!' },
					]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label="ID da Unidade"
					name="unitId"
					rules={[
						{ required: true, message: 'Por favor insira o id da unidade!' },
					]}
				>
					<Input type="number" />
				</Form.Item>
				<Form.Item
					label="ID da Empresa"
					name="companyId"
					rules={[
						{ required: true, message: 'Por favor insira o id da empresa!' },
					]}
				>
					<Input type="number" />
				</Form.Item>

				<Form.Item
					style={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '0',
					}}
				>
					<Button loading={loading} type="primary" htmlType="submit">
						{initialValues ? 'Editar' : 'Adicionar'}
					</Button>
				</Form.Item>
			</Form>
		</>
	);
};
