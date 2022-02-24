import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// routes
import App from "./App";
import Modal from "./common/Modal";
// style
import "./index.css";

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path=":taskId" element={<Modal />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
