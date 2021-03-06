import React, { createContext, useContext, useReducer } from "react";
import searchAndSortReducer, {
	initialState,
} from "../reducers/searchAndSortReducer";

const searchAndSortContext = createContext(initialState);

const SearchAndSortProvider = ({ children }) => {
	const [state, dispatch] = useReducer(searchAndSortReducer, initialState);

	const updateSearchValue = (value) => {
		dispatch({ type: "UPDATE_SEARCH_VALUE", payload: { searchValue: value } });
	};

	const updateSortValue = (key, value) => {
		dispatch({
			type: "UPDATE_SORT_VALUE",
			payload: { sortByKey: key, sortByValue: value },
		});
	};

	const value = {
		searchValue: state.searchValue,
		sortBy: state.sortBy,
		updateSearchValue,
		updateSortValue,
	};
	return (
		<searchAndSortContext.Provider value={value}>
			{children}
		</searchAndSortContext.Provider>
	);
};

export default SearchAndSortProvider;

export const useSearchAndSortContext = () => {
	const context = useContext(searchAndSortContext);
	if (context === "undefined") {
		throw new Error(
			"useSearchAndSortContext must used within searchAndSortContext"
		);
	}
	return context;
};
