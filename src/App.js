import { Outlet } from "react-router-dom";
// providers
import TasksProvider from "./providers/TasksProvider";
import SearchAndSortProvider from "./providers/SearchAndSortProvider";
// components
import Groups from "./components/Groups";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
	return (
		<TasksProvider>
			<Outlet />
			<div className="flex flex-col px-3 sm:px-5 lg:px-32 xl:px-52">
				<SearchAndSortProvider>
					<Nav />
					<Header />
					<Groups />
				</SearchAndSortProvider>
				<Footer />
			</div>
		</TasksProvider>
	);
}

export default App;
