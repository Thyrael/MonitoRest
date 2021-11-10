import { Table, Tag, Space } from "antd";

import React, { useEffect, useState } from "react";
import AddEndpoint from "./AddEndpoint";

const Endpoints = ({ endpoints, labels, setEndpoints }) => {
	const [endpointsValues, setEndpointsValues] = useState(endpoints);

	const AddOrEditEndpoint = (newEndpoint) => {
		const existingValue = endpointsValues.find((x) => x.id === newEndpoint.id);

		existingValue
			? setEndpointsValues((endpointsValues) => [
					...endpointsValues.filter((x) => x.id !== newEndpoint.id),
					newEndpoint,
			  ])
			: setEndpointsValues((endpointsValues) => [
					...endpointsValues,
					newEndpoint,
			  ]);
	};

	useEffect(() => {
		setEndpoints(endpointsValues);
	}, [endpointsValues, setEndpoints]);

	const columns = [
		{
			title: "Url",
			dataIndex: "url",
			key: "url",
		},
		{
			title: "Method",
			dataIndex: "method",
			key: "method",
		},
		{
			title: "Labels",
			key: "label",
			dataIndex: "label",
			render: (label) => <Tag color="geekblue">{label}</Tag>,
		},
		{
			title: "Action",
			key: "action",
			render: (record) => (
				<Space size="middle">
					<AddEndpoint
						labels={labels}
						editEndpoint={record}
						newEndpoint={(endpoint) => AddOrEditEndpoint(endpoint)}
					/>
					<span
						style={{ cursor: "pointer", color: "#1890ff" }}
						onClick={() =>
							setEndpointsValues(endpointsValues.filter((x) => x !== record))
						}
					>
						Delete
					</span>
				</Space>
			),
		},
	];

	return (
		<>
			<h3>Endpoint configuration</h3>
			<AddEndpoint
				labels={labels}
				newEndpoint={(endpoint) => AddOrEditEndpoint(endpoint)}
			/>
			<Table rowKey="id" columns={columns} dataSource={endpointsValues} />
		</>
	);
};

export default Endpoints;
