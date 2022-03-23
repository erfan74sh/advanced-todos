import React from "react";

const Tags = ({ currentTask }) => {
	return (
		<ul className="flex gap-x-2">
			{currentTask.tags &&
				currentTask.tags.map((tag, idx) => {
					return <li key={idx}>{tag}</li>;
				})}
		</ul>
	);
};

export default Tags;
