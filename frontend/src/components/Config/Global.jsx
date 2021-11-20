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
		<div>
			<h3>Global configuration</h3>
			<section
				style={{
					padding: "15px 0",
				}}
			>
				<span>Debounce time (ms) </span>
				<input
					value={debounceValue}
					onChange={(e) => setDebounceValue(e.target.value)}
				/>
			</section>
			<section
				style={{
					padding: "15px 0",
				}}
			>
				<span
					style={{
						padding: "0px 10px 0 0",
					}}
				>
					Labels
				</span>
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
			</section>
		</div>
	);
};

export default Global;
