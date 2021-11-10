import React from "react";

const Header = () => {
	return (
		<div style={{ width: "100%" }}>
			<img
				src="./img.png"
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
