import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ZoomPicture from "./pages/ZoomPicture";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/zoom/:index" element={<ZoomPicture />} />
			</Routes>
		</Fragment>
	);
};
export default App;
