import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useSearchAndSortContext } from "../providers/SearchAndSortProvider";
// hooks
import useOnClickOutside from "../hooks/useOnClickOutside";
// icons
import {
	faArrowDown19,
	faArrowDownAZ,
	faArrowDownShortWide,
	faArrowDownWideShort,
	faBars,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Sort = () => {
	const dropDownRef = useRef(null);

	const [showDropdown, setShowDropdown] = useState(false);

	const { updateSortValue } = useSearchAndSortContext();

	const [sortBy, setSortBy] = useState("");

	const handleChange = (e) => {
		setSortBy(e.target.value);
		setShowDropdown(false);
		updateSortValue("value", e.target.value);
	};

	const [sortOrder, setSortOrder] = useState("descending");

	const handleOrderChange = (e) => {
		setSortOrder(e.target.value);
		updateSortValue("order", e.target.value);
	};

	useOnClickOutside(dropDownRef, () => setShowDropdown(false));

	return (
		<div
			className="relative flex gap-x-3 text-zinc-600 self-end"
			ref={dropDownRef}
		>
			{sortBy !== "" && (
				<div className="flex gap-x-1" onChange={(e) => handleOrderChange(e)}>
					<label
						className={`cursor-pointer px-1.5 py-2 leading-none hover:text-sky-900 rounded ${
							sortOrder === "ascending" && "bg-slate-50"
						}`}
						title="ascending"
					>
						<span>
							<FontAwesomeIcon icon={faArrowDownShortWide} />
						</span>
						<input
							type="radio"
							name="sortOrder"
							value="ascending"
							className="hidden"
						/>
					</label>
					<label
						className={`cursor-pointer px-1.5 py-2 leading-none hover:text-sky-900 rounded ${
							sortOrder === "descending" && "bg-slate-50"
						}`}
						title="descending"
					>
						<span>
							<FontAwesomeIcon icon={faArrowDownWideShort} />
						</span>
						<input
							type="radio"
							name="sortOrder"
							value="descending"
							className="hidden"
						/>
					</label>
				</div>
			)}
			<div
				className="bg-slate-50 rounded-md px-2 py-1 flex gap-x-1 items-center text-zinc-600 cursor-pointer"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<div>
					{!sortBy && (
						<span className="flex items-center gap-x-2">
							Sort
							<FontAwesomeIcon icon={faBars} />
						</span>
					)}
					{sortBy && (
						<span className="text-sky-900 font-medium capitalize">
							{sortBy}
						</span>
					)}
				</div>
				{sortBy !== "" && (
					<span
						className="w-5 flex items-center justify-center h-5 hover:bg-slate-200 cursor-pointer"
						onClick={() => {
							setSortBy("");
						}}
					>
						<FontAwesomeIcon icon={faXmark} />
					</span>
				)}
			</div>
			{showDropdown && (
				<ul
					className="flex flex-col px-2 py-2.5 w-36 absolute right-0 rounded-md -bottom-1 transform translate-y-full bg-slate-50 shadow-lg z-50"
					onChange={(e) => handleChange(e)}
				>
					<li>
						<label
							className={`flex items-center cursor-pointer px-1.5 py-2 leading-none hover:bg-slate-200 rounded ${
								sortBy === "name" && "text-sky-900 font-bold"
							}`}
						>
							<span className="w-5 flex items-center justify-center h-5 mr-1">
								<FontAwesomeIcon icon={faArrowDownAZ} />
							</span>
							<span>Name</span>
							<input
								type="radio"
								name="sortBy"
								value="name"
								className="hidden"
							/>
						</label>
					</li>
					<li>
						<label
							className={`flex items-center cursor-pointer px-1.5 py-2 leading-none hover:bg-slate-200 rounded ${
								sortBy === "date" && "text-sky-900 font-bold"
							}`}
						>
							<span className="w-5 flex items-center justify-center h-5 mr-1">
								<FontAwesomeIcon icon={faArrowDown19} />
							</span>
							<span>Date</span>
							<input
								type="radio"
								name="sortBy"
								value="date"
								className="hidden"
							/>
						</label>
					</li>
				</ul>
			)}
		</div>
	);
};

export default Sort;
