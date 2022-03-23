import React from "react";
// context
import { useTasksContext } from "../providers/TasksProvider";

const Tag = ({ children }) => {
	const { tags } = useTasksContext();

	const bgColor = tags.filter((tag) => tag.tagName === children)[0].color;

	return (
		<li
			className="px-1 py-0.5 text-sm leading-none rounded cursor-default"
			style={{ backgroundColor: bgColor }}
		>
			<span>{children}</span>
		</li>
	);
};

const Tags = ({ tags }) => {
	return (
		<ul className="flex gap-x-1.5 flex-wrap gap-y-1">
			{tags &&
				tags.map((tag, idx) => {
					return <Tag key={idx}>{tag}</Tag>;
				})}
		</ul>
	);
};

export default Tags;
