import { Button, Input, Table } from 'antd';
import { useState } from 'react';
import { IUnit } from 'src/services/units/units.service';

const { Search } = Input;

type UnitTableProps = {
	initialData: IUnit[] | undefined;
	showEditModal: () => void;
	setUserSelected: (user: IUnit | undefined) => void;
};

const UnitTableComponent = ({
	initialData,
	showEditModal,
	setUserSelected,
}: UnitTableProps) => {
	const [tableData, setTableData] = useState(initialData);

	const unitsColumns = [
		{
			title: 'Unidade',
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: 'ID da Unidade',
			dataIndex: 'id',
			key: 'id',
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
		const newData: IUnit[] = initialData.filter((item: any) => {
			if (
				item.name.includes(filterSelect) ||
				item.name.toLowerCase().includes(filterSelect.toLowerCase())
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

			<Table dataSource={tableData} columns={unitsColumns} />
		</>
	);
};

export default UnitTableComponent;
