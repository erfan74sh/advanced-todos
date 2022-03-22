export const initialState = {
	tags: [],
	tasks: [
		{
			title: "sample task title...",
			description: "sample task description...",
			group: "todo",
			id: 1,
			createdDate: new Date().toLocaleString(),
		},
	],
};

const tasksReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "ADD_TASK_TO_GROUP":
			console.log("ADD_TASK_TO_GROUP", payload);
			return { ...state, tasks: payload.tasks };
		case "REMOVE_TASK":
			console.log("REMOVE_TASK", payload);
			return { ...state, tasks: payload.tasks };
		case "EDIT_TASK":
			console.log("EDIT_TASK");
			return { ...state, tasks: payload.tasks };
		case "DUPLICATE_TASK":
			console.log("DUPLICATE_TASK");
			return { ...state, tasks: payload.tasks };
		case "CHANGE_GROUP":
			console.log("CHANGE_GROUP");
			return state;
		default:
			return state;
	}
};

export default tasksReducer;
