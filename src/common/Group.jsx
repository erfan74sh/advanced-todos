import React from "react";
// components
import TodoCard from "./TodoCard";
import NewTodo from "./NewTodo";

const Group = ({ groupName }) => {
	return (
		<article className="w-72 bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3">
			<header className="flex justify-between items-center">
				<h2 className="font-medium capitalize">{groupName}</h2>
				<span className="py-0.5 px-2 max-w-full rounded bg-blue-100 text-sm text-sky-900">
					2
				</span>
			</header>
			<NewTodo groupName={groupName} />
			<ul className="flex flex-col gap-y-2.5">
				<TodoCard />
				<TodoCard />
			</ul>
		</article>
	);
};

export default Group;
