import React from "react";

const Tag = ({ children }) => {
	return (
		<li className="px-1 py-0.5 bg-red-300 text-sm leading-none rounded cursor-default">
			<span>{children}</span>
		</li>
	);
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
