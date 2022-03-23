import React, { useContext, useReducer, createContext } from "react";
import tasksReducer, { initialState } from "../reducers/tasksReducer";

const tasksContext = createContext(initialState);

const TasksProvider = ({ children }) => {
	const [state, dispatch] = useReducer(tasksReducer, initialState);

	const addToGroup = (task) => {
		const updatedTasks = state.tasks.concat(task);
		dispatch({
			type: "ADD_TASK_TO_GROUP",
			payload: {
				tasks: updatedTasks,
			},
		});
	};

	const editTask = (id, editedTask) => {
		const index = state.tasks.findIndex((task) => task.id === id);
		const tempTasks = [...state.tasks];
		tempTasks[index] = editedTask;
		dispatch({
			type: "EDIT_TASK",
			payload: {
				tasks: tempTasks,
			},
		});
	};

	const removeTask = (id) => {
		const tempTasks = state.tasks.filter((task) => task.id !== id);
		dispatch({
			type: "REMOVE_TASK",
			payload: {
				tasks: tempTasks,
			},
		});
	};

	const duplicateTask = (id) => {
		const taskToDuplicate = state.tasks.filter((task) => task.id === id)[0];
		const index = state.tasks.findIndex((task) => task.id === id);
		const date = new Date();
		const tempTasks = [...state.tasks];
		tempTasks.splice(index + 1, 0, {
			...taskToDuplicate,
			id: date.getTime(),
			createdDate: date.toLocaleString(),
		});
		dispatch({
			type: "DUPLICATE_TASK",
			payload: {
				tasks: tempTasks,
			},
		});
	};

	const addTagToTask = (id, tagToAdd) => {
		const index = state.tasks.findIndex((task) => task.id === id);
		const tempTask = {
			...state.tasks[index],
			tags: [...state.tasks[index].tags],
		};
		if (!tempTask.tags.includes(tagToAdd)) {
			tempTask.tags.push(tagToAdd);
			const tempTasks = [...state.tasks];
			tempTasks[index] = tempTask;
			dispatch({
				type: "ADD_TAG_TO_TASK",
				payload: {
					tasks: tempTasks,
				},
			});
		}
	};

	const addTag = (newTag) => {
		const tempTags = state.tags;
		tempTags.push(newTag);
		dispatch({
			type: "ADD_TAG",
			payload: {
				tags: tempTags,
			},
		});
	};

	const value = {
		tasks: state.tasks,
		tags: state.tags,
		addToGroup,
		editTask,
		removeTask,
		duplicateTask,
		addTagToTask,
		addTag,
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
