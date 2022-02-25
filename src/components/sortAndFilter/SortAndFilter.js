import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import FilterOptions from "./FilterOptions";
import SortOptions from "./SortOptions";
// icons
import { faFilter, faSort, faXmark } from "@fortawesome/free-solid-svg-icons";

const SortAndFilter = () => {
	const [sortOrFilter, setSortOrFilter] = useState("");

	const handleChange = (e) => {
		setSortOrFilter(e.target.value);
	};

	return (
		<div className="flex flex-col text-zinc-700 overflow-hidden flex-grow">
			<form
				className="flex gap-x-3 justify-end"
				onInput={(e) => handleChange(e)}
			>
				{sortOrFilter !== "" && (
					<label className="flex items-center p-1.5 rounded leading-none cursor-pointer bg-zinc-100 hover:text-sky-600 transition-colors">
						<span className="w-4 h-4 flex items-center justify-center">
							<FontAwesomeIcon icon={faXmark} className="" />
						</span>

						<input
							type="radio"
							name="sort-and-filter"
							value=""
							className="hidden"
						/>
					</label>
				)}
				<label
					className={`flex items-center gap-x-1 px-3 py-1.5 rounded leading-none cursor-pointer ${
						sortOrFilter === "filter" && "text-sky-600 bg-zinc-100"
					}`}
				>
					<span className="w-4 h-4 flex items-center justify-center">
						<FontAwesomeIcon icon={faSort} className=" text-lg" />
					</span>
					<span>Filter</span>
					<input
						type="radio"
						name="sort-and-filter"
						value="filter"
						className="hidden"
					/>
				</label>
				<label
					className={`flex items-center gap-x-1 px-3 py-1.5 rounded leading-none cursor-pointer ${
						sortOrFilter === "sort" && "text-sky-600 bg-zinc-100"
					}`}
				>
					<span className="w-4 h-4 flex items-center justify-center">
						<FontAwesomeIcon icon={faFilter} className="" />
					</span>
					<span>Sort</span>
					<input
						type="radio"
						name="sort-and-filter"
						value="sort"
						className="hidden"
					/>
				</label>
			</form>
			<div
				className={`${
					sortOrFilter !== "" ? "max-h-screen" : "max-h-0"
				} overflow-hidden transition-all duration-300  w-full`}
			>
				<div className="mt-3 pt-1 flex justify-end">
					{sortOrFilter === "sort" ? <SortOptions /> : <FilterOptions />}
				</div>
			</div>
		</div>
	);
};

export default SortAndFilter;
