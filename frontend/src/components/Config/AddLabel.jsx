import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Input } from "antd";

const AddLabel = ({ newLabel }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [labelValue, setLabelValue] = useState("");

	const modalCancel = () => {
		setLabelValue("");
		setIsModalVisible(false);
	};

	const modalSubmit = () => {
		newLabel(labelValue);
		modalCancel();
	};

	return (
		<>
			<Button
				type="primary"
				icon={<PlusOutlined />}
				onClick={() => setIsModalVisible(true)}
			/>
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={modalSubmit}
				onCancel={modalCancel}
			>
				<Input
					onChange={(e) => setLabelValue(e.target.value)}
					value={labelValue}
				/>
			</Modal>
		</>
	);
};

export default AddLabel;
