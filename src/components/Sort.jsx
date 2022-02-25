import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sort = () => {
	return (
		<div className="relative">
			<div className="flex gap-x-3 items-center text-zinc-600">
				<span>sort by</span>
				<FontAwesomeIcon icon={faCaretDown} />
			</div>
			<ul className="flex flex-col px-2 py-2.5 w-32 absolute right-0 -bottom-1 transform translate-y-full bg-zinc-50 shadow-lg">
				<li>
					<label className="block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded">
						<span>Name</span>
						<input type="radio" name="sortBy" value="name" className="hidden" />
					</label>
				</li>
				<li>
					<label className="block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded">
						<span>Date</span>
						<input type="radio" name="sortBy" value="date" className="hidden" />
					</label>
				</li>
				<li>
					<label className="block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded">
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
					<label className="block cursor-pointer px-1.5 py-2 leading-none hover:bg-zinc-200 rounded">
						<span>None</span>
						<input type="radio" name="sortBy" value="" className="hidden" />
					</label>
				</li>
			</ul>
		</div>
	);
};

export default Sort;
