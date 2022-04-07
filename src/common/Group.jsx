import React, { useEffect, useState } from "react";
// components
import TodoCard from "./TodoCard";
import NewTodo from "./NewTodo";
import { useTasksContext } from "../providers/TasksProvider";

const Group = ({ groupName }) => {
	const { tasks, editTask } = useTasksContext();

	const [tasksInGroup, setTasksInGroup] = useState([]);
	useEffect(() => {
		const filteredTasks = tasks.filter((task) => task.group === groupName);
		setTasksInGroup(filteredTasks);
	}, [tasks, groupName]);

	const handleDrop = (e) => {
		e.preventDefault();
		const cardId = Number(e.dataTransfer.getData("cardId"));
		let tempTask = tasks.filter((task) => task.id === cardId)[0];
		if (tempTask.group !== groupName) {
			tempTask = { ...tempTask, group: groupName, tags: [...tempTask.tags] };
			editTask(cardId, tempTask);
		}
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
	};

	return (
		<article className="w-72 bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3 min-h-screen">
			<header className="flex justify-between items-center">
				<h2 className="font-medium capitalize">{groupName}</h2>
				<span className="py-0.5 px-2 max-w-full rounded bg-blue-100 text-sm text-sky-900">
					{tasksInGroup.length}
				</span>
			</header>
			<NewTodo groupName={groupName} />
			<ul
				className="flex flex-col gap-y-2.5 h-full droppable"
				onDrop={handleDrop}
				onDragOver={handleDragOver}
			>
				{tasksInGroup.map((task, idx) => {
					return <TodoCard {...task} key={idx} />;
				})}
			</ul>
		</article>
	);
};

export default Group;
