import { PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Modal, Button, Input, Select } from "antd";

const AddEndpoint = ({ newEndpoint, labels, editEndpoint = null }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [endpoint, setEndpoint] = useState(editEndpoint ? editEndpoint : {});

	const { Option } = Select;

	if (!endpoint.hasOwnProperty("id")) {
		setEndpoint((obj) => ({
			...obj,
			id: Math.floor(Math.random() * (1000 - 1) + 1),
		}));
	}

	const modalCancel = () => {
		setIsModalVisible(false);
	};

	const modalSubmit = () => {
		newEndpoint(endpoint);
		modalCancel();
	};

	const handleChange = (e) => {
		e.persist();
		setEndpoint((obj) => ({ ...obj, url: e.target.value }));
	};

	return (
		<>
			{editEndpoint ? (
				<span
					style={{ cursor: "pointer", color: "#1890ff" }}
					onClick={() => setIsModalVisible(true)}
				>
					Edit
				</span>
			) : (
				<Button
					type="primary"
					icon={<PlusOutlined />}
					onClick={() => setIsModalVisible(true)}
				/>
			)}
			<Modal
				title="Basic Modal"
				visible={isModalVisible}
				onOk={modalSubmit}
				onCancel={modalCancel}
			>
				<p>Url </p>
				<Input
					value={endpoint.url}
					type="text"
					onChange={(e) => handleChange(e)}
				/>
				<p>Method </p>
				<Select
					showSearch
					style={{ width: 200 }}
					placeholder="Method"
					value={endpoint.method}
					onChange={(value) =>
						setEndpoint((obj) => ({ ...obj, method: value }))
					}
				>
					<Option value="GET">GET</Option>
					<Option value="POST">POST</Option>
				</Select>
				<p>Label</p>
				<Select
					showSearch
					style={{ width: 200 }}
					value={endpoint.label}
					placeholder="Label"
					onChange={(value) => setEndpoint((obj) => ({ ...obj, label: value }))}
				>
					{labels.map((label) => (
						<Option key={label} value={label}>
							{label}
						</Option>
					))}
				</Select>
			</Modal>
		</>
	);
};

export default AddEndpoint;
