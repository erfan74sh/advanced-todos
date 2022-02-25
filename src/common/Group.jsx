import React, { useEffect, useState } from "react";
// components
import TodoCard from "./TodoCard";
import NewTodo from "./NewTodo";
import { useTasksContext } from "../providers/TasksProvider";

const Group = ({ groupName }) => {
	const { tasks } = useTasksContext();

	const [tasksInGroup, setTasksInGroup] = useState([]);
	useEffect(() => {
		const filteredTasks = tasks.filter((task) => task.group === groupName);
		setTasksInGroup(filteredTasks);
	}, [tasks, groupName]);

	return (
		<article className="w-72 bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3 min-h-screen">
			<header className="flex justify-between items-center">
				<h2 className="font-medium capitalize">{groupName}</h2>
				<span className="py-0.5 px-2 max-w-full rounded bg-blue-100 text-sm text-sky-900">
					{tasksInGroup.length}
				</span>
			</header>
			<NewTodo groupName={groupName} />
			<ul className="flex flex-col gap-y-2.5">
				{tasksInGroup.map((task, idx) => {
					return <TodoCard {...task} key={idx} />;
				})}
			</ul>
		</article>
	);
};

export default Group;
