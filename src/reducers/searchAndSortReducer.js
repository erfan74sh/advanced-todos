export const initialState = {
	searchValue: "",
	sortValue: "",
};

const searchAndSortReducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "UPDATE_SEARCH_VALUE":
			console.log("UPDATE_SEARCH_VALUE");
			return { ...state, searchValue: payload.searchValue };
		default:
			return state;
	}
};

export default searchAndSortReducer;
