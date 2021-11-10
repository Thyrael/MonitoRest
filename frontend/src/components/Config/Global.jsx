import React, { useEffect, useState } from "react";
import { Tag } from "antd";
import AddLabel from "./AddLabel";

const Global = ({ debounceTime, labels, setDebounceTime, setLabels }) => {
	const [debounceValue, setDebounceValue] = useState(debounceTime);
	const [labelsValues, setLabelsValues] = useState(labels);

	useEffect(() => {
		setDebounceTime(debounceValue);
	}, [debounceValue, setDebounceTime]);

	useEffect(() => {
		setLabels(labelsValues);
	}, [labelsValues, setLabels]);

	return (
		<>
			<h3>Global configuration</h3>
			<p>Debounce time (ms) </p>
			<input
				value={debounceValue}
				onChange={(e) => setDebounceValue(e.target.value)}
			/>
			<p>Labels</p>
			{labelsValues.map((label) => (
				<Tag key={label} color="blue">
					{label}
				</Tag>
			))}
			<AddLabel
				newLabel={(label) =>
					setLabelsValues((labelsValues) => [...labelsValues, label])
				}
			/>
		</>
	);
};

export default Global;
