import { Button, Modal, message } from 'antd';
import { NoticeType } from 'antd/es/message/interface';
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Loading } from 'src/components/LoadingComponent/Loading';
import { UnitFormComponent } from 'src/pages/Units/Components/UnitForms/UnitForm';
import UnitTableComponent from 'src/pages/Units/Components/UnitTable/UnitTable';
import { IUnit, getAllUnits } from 'src/services/units/units.service';
import { TabTitle } from 'src/utils';

import './units.scss';

export const Units = () => {
	TabTitle('Unidades');

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const [userSelected, setUserSelected] = useState<IUnit>();

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
	const { isLoading, data } = useQuery('unitsList', async () => {
		const result = await getAllUnits();
		return result;
	});

	if (isLoading) return <Loading />;
	return (
		<div className="units">
			{contextHolder}

			<div className="units__header">
				<h1 className="title">Unidades</h1>
				<Button type="primary" onClick={showModal}>
					<RiAddFill size={16} />
					Adicionar Unidade
				</Button>
			</div>
			<UnitTableComponent
				initialData={data}
				showEditModal={showEditModal}
				setUserSelected={setUserSelected}
			/>

			<Modal
				title="Adicionar nova unidade"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<UnitFormComponent
					autoCloseModal={handleCancel}
					showMessage={showMessage}
				/>
			</Modal>
			<Modal
				title={`Editar unidade: ${userSelected?.name}`}
				open={isEditModalOpen}
				onOk={handleEditOk}
				onCancel={handleEditCancel}
				footer={null}
				destroyOnClose
			>
				<UnitFormComponent
					autoCloseModal={handleEditCancel}
					showMessage={showMessage}
					initialValues={userSelected}
				/>
			</Modal>
		</div>
	);
};
