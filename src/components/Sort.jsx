import React from "react";

const Sort = () => {
	return (
		<div>
			<span>sort by:</span>
			<ul>
				<li>
					<label>
						<span>Name</span>
						<input type="radio" name="sortBy" value="name" className="hidden" />
					</label>
				</li>
				<li>
					<label>
						<span>Date</span>
						<input type="radio" name="sortBy" value="date" className="hidden" />
					</label>
				</li>
				<li>
					<label>
						<span>Priority</span>
						<input
							type="radio"
							name="sortBy"
							value="priority"
							className="hidden"
						/>
					</label>
				</li>
			</ul>
		</div>
	);
};

export default Sort;
