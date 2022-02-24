import { Outlet } from "react-router-dom";
// providers
import TasksProvider from "./common/providers/TasksProvider";
// components
import Groups from "./components/Groups";
// styles
import "./App.css";

function App() {
	return (
		<TasksProvider>
			<Outlet />
			<Groups />
		</TasksProvider>
	);
}

export default App;
