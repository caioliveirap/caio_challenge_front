import { Button, Input, Table } from 'antd';
import { useState } from 'react';
import { IUser } from 'src/services/users/users.service';

const { Search } = Input;

type UserTableProps = {
	initialData: IUser[] | undefined;
	showEditModal: () => void;
	setUserSelected: (user: IUser | undefined) => void;
};

const UserTableComponent = ({
	initialData,
	showEditModal,
	setUserSelected,
}: UserTableProps) => {
	const [tableData, setTableData] = useState(initialData);

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
							setUserSelected(initialData?.[index]);
							showEditModal();
						}}
					>
						Editar
					</Button>
				);
			},
		},
	];
	const search = (filterSelect: string) => {
		if (!initialData) {
			return;
		}
		const newData: IUser[] = initialData.filter((item: any) => {
			if (
				item.name.includes(filterSelect) ||
				item.name.toLowerCase().includes(filterSelect.toLowerCase()) ||
				item.email.includes(filterSelect) ||
				item.email.toLowerCase().includes(filterSelect.toLowerCase())
			) {
				return item;
			}
		});
		setTableData(newData);
	};

	return (
		<>
			<div className="users__search">
				<Search
					placeholder="Procurar por nome"
					allowClear
					enterButton="Procurar"
					size="large"
					onSearch={search}
				/>
			</div>

			<Table dataSource={tableData} columns={usersColumns} />
		</>
	);
};

export default UserTableComponent;
