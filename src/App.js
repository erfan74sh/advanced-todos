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
			<Groups />
			<Outlet />
		</TasksProvider>
	);
}

export default App;
