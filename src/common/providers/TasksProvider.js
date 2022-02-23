import React, { useContext, useReducer, createContext } from "react";
import tasksReducer, { initialState } from "../../reducers/tasksReducer";

const tasksContext = createContext(initialState);

const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	const value = {
		tasks: state,
	};

	return (
		<tasksContext.Provider value={value}>{children}</tasksContext.Provider>
	);
};

export default TasksProvider;

export const useTasksContext = () => {
	const context = useContext(tasksContext);
	if (context === "undefined") {
		throw new Error("useTasksContext must used within TasksContext");
	}
	return context;
};
