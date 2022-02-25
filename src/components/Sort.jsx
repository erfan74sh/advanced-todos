import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
	faArrowDownShortWide,
	faArrowDownWideShort,
	faCaretDown
} from "@fortawesome/free-solid-svg-icons";

const Sort = () => {
	const [showDropdown, setShowDropdown] = useState(false);

  const [sortBy, setSortBy] = useState("")

  const handleChange = (e) => {
    setSortBy(e.target.value)
    setShowDropdown(false)
  }

	const [sortOrder, setSortOrder] = useState('descending')

	  const handleOrderChange = (e) => {
			setSortOrder(e.target.value)
		}

	return (
		<div className="relative flex gap-x-3 text-zinc-600">
		{sortBy !== "" && (
				<div className="flex gap-x-1" onChange={(e)=> handleOrderChange(e)}>
					<label className={`cursor-pointer px-1.5 py-2 leading-none hover:text-sky-900 rounded ${sortOrder === "ascending" && "bg-zinc-200"}`} title="ascending">
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
					<label className={`cursor-pointer px-1.5 py-2 leading-none hover:text-sky-900 rounded ${sortOrder === "descending" && "bg-zinc-200"}`} title="descending">
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
				className="hover:bg-zinc-100 rounded-md px-1 py-1 flex gap-x-3 items-center text-zinc-600 cursor-pointer"
				onClick={() => setShowDropdown(!showDropdown)}
			>
				<div>
					<span>Sort by </span>
					{sortBy && <span className="text-sky-900 font-medium capitalize">{sortBy}</span>}
				</div>
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			{showDropdown && (
				<ul className="flex flex-col px-2 py-2.5 w-32 absolute right-0 rounded-md -bottom-1 transform translate-y-full bg-zinc-50 shadow-lg z-50" onChange={(e)=> handleChange(e)}>
					<li>
						<label className={`block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded ${sortBy === "name" && "text-sky-900"}`}>
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
						<label className={`block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded ${sortBy === "date" && "text-sky-900"}`}>
							<span>Date</span>
							<input
								type="radio"
								name="sortBy"
								value="date"
								className="hidden"
							/>
						</label>
					</li>
					<li>
						<label className={`block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded ${sortBy === "priority" && "text-sky-900"}`}>
							<span>Priority</span>
							<input
								type="radio"
								name="sortBy"
								value="priority"
								className="hidden"
							/>
						</label>
					</li>
					<li>
						<label className={`block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded ${sortBy === "" && "text-sky-900"}`}>
							<span>None</span>
							<input type="radio" name="sortBy" value="" className="hidden" />
						</label>
					</li>
				</ul>
			)}
			
		</div>
	);
};

export default Sort;
