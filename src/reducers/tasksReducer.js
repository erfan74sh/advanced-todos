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
			return { ...state, tasks: payload.tasks };
		case "REMOVE_TASK":
			return { ...state, tasks: payload.tasks };
		case "EDIT_TASK":
			return { ...state, tasks: payload.tasks };
		case "DUPLICATE_TASK":
			return { ...state, tasks: payload.tasks };
		case "CHANGE_GROUP":
			return state;
		case "ADD_TAG_TO_TASK":
			return { ...state, tasks: payload.tasks };
		case "ADD_TAG":
			return { ...state, tags: payload.tags };
		case "REORDER_TASKS":
			return { ...state, tasks: payload.tasks };
		default:
			return state;
	}
};

export default tasksReducer;
