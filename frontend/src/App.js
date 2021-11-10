import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
	const [root, setRoot] = useState({});

	console.log(root);
	useEffect(() => {
		window.backend.read().then((data) => setRoot(data));
	}, []);
	return (
		<div id="app">
			<Header />
			<Content data={root} />
		</div>
	);
}

export default App;
