export const initialState = {
	searchValue: "",
	sortBy: {
		value: "",
		order: "",
	},
};

const searchAndSortReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_SEARCH_VALUE":
			return { ...state, searchValue: payload.searchValue };
		case "UPDATE_SORT_VALUE":
			return {
				...state,
				sortBy: { ...state.sortBy, [payload.sortByKey]: payload.sortByValue },
			};
		default:
			return state;
	}
};

export default searchAndSortReducer;
