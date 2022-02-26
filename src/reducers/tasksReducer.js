export const initialState = [
	{
		title: "sample task title...",
		description: "sample task description...",
		group: "todo",
		id: 1,
		createdDate: new Date().toLocaleString()
	},
];

const tasksReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_TASK_TO_GROUP":
			console.log("ADD_TASK_TO_GROUP", payload);
			return payload.tasks;
		case "REMOVE_TASK_FROM_GROUP":
			console.log("REMOVE_TASK_FROM_GROUP", payload);
			return state;
		case "EDIT_TASK":
			console.log("EDIT_TASK");
			const index = state.findIndex(task=> task.id === payload.id)
			const tempTasks = [...state];
			tempTasks[index] = payload.editedTask
			return tempTasks;
		case "DUPLICATE_TASK":
			console.log("DUPLICATE_TASK");
			return payload.tasks
		case "CHANGE_GROUP":
			console.log("CHANGE_GROUP");
			return state
		default:
			return state;
	}
};

export default tasksReducer;
