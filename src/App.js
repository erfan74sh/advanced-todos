import "./App.css";
import TasksProvider from "./common/providers/TasksProvider";
// components
import Groups from "./components/Groups";

function App() {
	return (
		<div>
			<TasksProvider>
				<Groups />
			</TasksProvider>
		</div>
	);
}

export default App;
