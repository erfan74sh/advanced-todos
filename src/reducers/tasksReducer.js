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
		default:
			return state;
	}
};

export default tasksReducer;
