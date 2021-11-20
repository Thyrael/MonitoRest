import React from "react";
import logo from "../img.png";

const Header = () => {
	return (
		<div style={{ width: "100%" }}>
			<img
				src={logo}
				alt="logo"
				height={100}
				style={{
					objectFit: "contain",
					width: "100%",
					display: "flex",
					alignItems: "center",
				}}
			/>
		</div>
	);
};

export default Header;
