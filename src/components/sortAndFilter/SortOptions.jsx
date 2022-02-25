import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
	faArrowDownShortWide,
	faArrowDownWideShort,
} from "@fortawesome/free-solid-svg-icons";

const SortOptions = () => {
	return (
		<form className="flex gap-x-3 divide-x-2">
			<fieldset>
				<div>order</div>
				<ul>
					<li>
						<label className="flex items-center gap-x-2">
							<FontAwesomeIcon icon={faArrowDownShortWide} />
							<span>ascending</span>
							<input type="radio" name="sort-order" value="ascending" />
						</label>
					</li>
					<li>
						<label className="flex items-center gap-x-2">
							<FontAwesomeIcon icon={faArrowDownWideShort} />
							<span>descending</span>
							<input type="radio" name="sort-order" value="descending" />
						</label>
					</li>
				</ul>
			</fieldset>
			<fieldset className="pl-3">
				<label>
					<span>Name</span>
					<input type="radio" name="sortBy" value="name" />
				</label>
				<label>
					<span>Date</span>
					<input type="radio" name="sortBy" value="date" />
				</label>
				<label>
					<span>Priority</span>
					<input type="radio" name="sortBy" value="priority" />
				</label>
			</fieldset>
		</form>
	);
};

export default SortOptions;
