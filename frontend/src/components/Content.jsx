import React from "react";
import Config from "./Config/Config";

import { Tabs } from "antd";

const { TabPane } = Tabs;

const Content = ({ data }) => {
	return (
		<div style={{ width: "100%", padding: "0 100px" }}>
			<Tabs defaultActiveKey="1" onChange={console.log("change")}>
				<TabPane tab="Dashboard" key="1">
					Dashboard
				</TabPane>
				<TabPane tab="Config" key="2">
					<Config data={data} />
				</TabPane>
			</Tabs>
		</div>
	);
};

export default Content;
