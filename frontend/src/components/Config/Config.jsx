import React, { useState } from "react";

import { Divider } from "antd";
import Endpoints from "./Endpoints";
import Global from "./Global";
import { Button } from "antd";

const Config = ({ data }) => {
	const [debounceTime, setDebounceTime] = useState(data.debounce_time);
	const [labels, setLabels] = useState(data.labels);
	const [endpoints, setEndpoints] = useState(data.endpoints);

	const discardChange = () => {
		setDebounceTime(data.debounce_time);
		setLabels(data.labels);
		setEndpoints(data.endpoints);
	};

	const saveChange = () => {
		window.backend.save(
			JSON.stringify({
				created_at: new Date(),
				debounce_time: debounceTime,
				labels: labels,
				endpoints: endpoints,
			})
		);
	};

	return (
		<div>
			<Global
				debounceTime={debounceTime}
				setDebounceTime={(value) => setDebounceTime(value)}
				setLabels={(values) => setLabels(values)}
				labels={labels}
			/>
			<Divider plain />
			<Endpoints
				endpoints={endpoints}
				labels={labels}
				setEndpoints={(values) => setEndpoints(values)}
			/>
			<Button type="primary" onClick={saveChange}>
				Save
			</Button>
			<Button danger onClick={discardChange}>
				Discard
			</Button>
		</div>
	);
};

export default Config;
