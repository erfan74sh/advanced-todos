import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useSearchAndSortContext } from "../providers/SearchAndSortProvider";
// icons
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
	const { searchValue, updateSearchValue } = useSearchAndSortContext();
	return (
		<div className="w-full sm:w-auto max-w-screen-sm sm:max-w-md flex-shrink flex rounded-md flex-grow focus-within:ring-2 sm:bg-transparent hover:bg-zinc-100 bg-zinc-100  transition-colors duration-300">
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
				placeholder="Search through Titles"
				className="bg-transparent outline-none w-full px-1 leading-none"
				autoComplete="off"
				value={searchValue}
				onChange={(e) => {
					updateSearchValue(e.target.value);
				}}
			/>
			{searchValue && (
				<button
					className="flex items-center justify-center text-2xl text-sky-900 w-9 h-9 mr-1.5 cursor-pointer opacity-50 transition-opacity hover:opacity-100"
					onClick={() => updateSearchValue("")}
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}
		</div>
	);
};

export default Search;
