import React, { useContext, useReducer, createContext } from "react";
import tasksReducer, { initialState } from "../reducers/tasksReducer";

const tasksContext = createContext(initialState);

const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	const addToGroup = (task) => {
		const updatedTasks = state.concat(task);
		dispatch({
			type: "ADD_TASK_TO_GROUP",
			payload: {
				tasks: updatedTasks,
			},
		});
	};

	const editTask = (id, editedTask) => {
		dispatch({
			type: "EDIT_TASK",
			payload: {
				id,
				editedTask
			}
		})
	}

	const value = {
		tasks: state,
		addToGroup,
		editTask
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
