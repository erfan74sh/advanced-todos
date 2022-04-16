import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useSearchAndSortContext } from "../providers/SearchAndSortProvider";
// icons
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	const { searchValue, updateSearchValue } = useSearchAndSortContext();
	return (
		<div className="flex rounded-md flex-grow max-w-md focus-within:ring-2 hover:bg-gray-50 transition-colors duration-300">
			<label
				htmlFor="search"
				className="flex items-center justify-center text-2xl text-sky-900 w-9 h-9"
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</label>
			<input
				type="text"
				id="search"
				name="search"
				placeholder="search"
				className="bg-transparent outline-none w-full px-1 leading-none"
				autoComplete="off"
				value={searchValue}
				onChange={(e) => {
					updateSearchValue(e.target.value);
				}}
			/>
		</div>
	);
};

export default Search;
