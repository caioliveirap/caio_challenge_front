import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import {
	IUnit,
	addNewUnit,
	updateUnit,
} from 'src/services/units/units.service';
import { NoticeType } from 'src/services/users/users.service';

import './UnitForm.scss';

type UnitFormProps = {
	autoCloseModal: () => void;
	initialValues?: IUnit;
	showMessage: (type: NoticeType, message: string) => void;
};

export const UnitFormComponent = ({
	autoCloseModal,
	initialValues,
	showMessage,
}: UnitFormProps) => {
	const [loading, setLoading] = useState(false);

	const onFinish = async (values: any) => {
		setLoading(true);
		try {
			await addNewUnit(values);
			showMessage('success', 'Unidade adicionada com sucesso');
			setLoading(false);
			autoCloseModal();
		} catch (error) {
			setLoading(false);
			showMessage('error', 'Erro ao adicionar unidade');
		}
	};

	const onFinishEdit = async (values: any) => {
		setLoading(true);
		try {
			if (initialValues) {
				await updateUnit(initialValues.id, values);
			}
			showMessage('success', 'Unidade editada com sucesso');
			setLoading(false);
			autoCloseModal();
		} catch (error) {
			setLoading(false);
			showMessage('error', 'Erro ao editar unidade');
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
					label="Nome"
					name="name"
					rules={[
						{ required: true, message: 'Por favor insira o nome da unidade!' },
					]}
				>
					<Input />
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
