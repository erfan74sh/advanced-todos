import React from "react";

const Tag = ({ children }) => {
	return <li>{children}</li>;
};

const Tags = ({ currentTask }) => {
	return (
		<ul className="flex gap-x-2">
			{currentTask.tags &&
				currentTask.tags.map((tag, idx) => {
					return <Tag key={idx}>{tag}</Tag>;
				})}
		</ul>
	);
};

export default Tags;
