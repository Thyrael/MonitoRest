import React from "react";

import { Card } from "antd";

// light orange : #fed8b1
// light green : #90ee90
// light red : #ffcccb

const Dashboard = ({ data }) => {
	const values = data?.labels?.map((label) => {
		return {
			label: label,
			endpoints: data.endpoints.filter((x) => x.label === label),
		};
	});

	console.log(values);

	return values ? (
		values.map(
			(value) =>
				value.endpoints.length !== 0 && (
					<Card
						key={value.label}
						title={value.label}
						style={{
							width: "100%",
							backgroundColor: "#ffcccb",
							margin: "10px 0",
						}}
					>
						{value.endpoints.map((endpoint) => (
							<p key={endpoint}>{endpoint.url}</p>
						))}
					</Card>
				)
		)
	) : (
		<div />
	);
};

export default Dashboard;
