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

	const removeTask = (id) => {
		const tempTasks = state.filter(task => task.id !== id);
		dispatch({
			type: "REMOVE_TASK",
			payload:{
				tasks: tempTasks
			}
		})
	}

	const duplicateTask = (id) => {
		const taskToDuplicate = state.filter(task => task.id === id)[0]
		const index = state.findIndex(task => task.id === id);
		const date = new Date();
		const tempTasks = [...state]
		tempTasks.splice(index+1, 0, {...taskToDuplicate, id: date.getTime(), createdDate: date.toLocaleString()})
		dispatch({
			type: "DUPLICATE_TASK",
			payload: {
				tasks: tempTasks
			}
		})
	}

	const value = {
		tasks: state,
		addToGroup,
		editTask,
		removeTask,
		duplicateTask
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
