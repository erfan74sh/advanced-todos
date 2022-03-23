import React from "react";

const Tag = ({ children }) => {
	return (
		<li className="px-1 py-0.5 bg-red-300 text-sm leading-none rounded cursor-default">
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
