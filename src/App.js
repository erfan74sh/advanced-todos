import { Outlet } from "react-router-dom";
// providers
import TasksProvider from "./providers/TasksProvider";
import SearchAndSortProvider from "./providers/SearchAndSortProvider";
// components
import Groups from "./components/Groups";
// styles
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
	return (
		<TasksProvider>
			<Outlet />
			<div className="flex flex-col px-44">
				<SearchAndSortProvider>
					<Nav />
					<Header />
					<Groups />
				</SearchAndSortProvider>
			</div>
		</TasksProvider>
	);
}

export default App;
