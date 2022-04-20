export const initialState = {
	tags: [
		{ tagName: "Q1", color: "#e5e5e5" },
		{ tagName: "Q2", color: "#a3a3a3" },
		{ tagName: "Q3", color: "#fecaca" },
	],
	tasks: [
		{
			title: "Drag me below next card...",
			description:
				"try moving this card after next card by dragging to change it's order ...",
			group: "ToDo",
			id: 1,
			createdDate: new Date().toLocaleString(),
			tags: ["Q1"],
		},
		{
			title: "Drag me to another group...",
			description:
				"try moving this card to another group by dragging to change it's group...",
			group: "ToDo",
			id: 2,
			createdDate: new Date().toLocaleString(),
			tags: ["Q2"],
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
		case "ADD_TAG_TO_TASK":
			console.log("ADD_TAG_TO_TASK");
			return { ...state, tasks: payload.tasks };
		case "ADD_TAG":
			console.log("ADD_TAG");
			return { ...state, tags: payload.tags };
		case "REORDER_TASKS":
			console.log("REORDER_TASKS");
			return { ...state, tasks: payload.tasks };
		default:
			return state;
	}
};

export default tasksReducer;
