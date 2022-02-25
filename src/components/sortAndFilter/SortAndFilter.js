import { faFilter, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FilterOptions from "./FilterOptions";
import SortOptions from "./SortOptions";

const SortAndFilter = () => {
	return (
		<div className="flex flex-col text-zinc-700">
			<form className="flex gap-x-3 justify-end">
				<label className="flex items-center gap-x-1 px-3 py-1.5 leading-none cursor-pointer">
					<span className="w-4 h-4 flex items-center justify-center">
						<FontAwesomeIcon icon={faSort} className="text-zinc-500 text-lg" />
					</span>
					<span>Filter</span>
					<input
						type="radio"
						name="sort-and-filter"
						value="filter"
						className=""
					/>
				</label>
				<label className="flex items-center gap-x-1 px-3 py-1.5 leading-none cursor-pointer">
					<span className="w-4 h-4 flex items-center justify-center">
						<FontAwesomeIcon icon={faFilter} className="text-zinc-500" />
					</span>
					<span>Sort</span>
					<input
						type="radio"
						name="sort-and-filter"
						value="sort"
						className=""
					/>
				</label>
			</form>
			<SortOptions />
			<FilterOptions />
		</div>
	);
};

export default SortAndFilter;
