import React, { useEffect, useState } from "react";
// components
import TodoCard from "./TodoCard";
import NewTodo from "./NewTodo";
import { useTasksContext } from "../providers/TasksProvider";

const Group = ({ groupName, draggedRef }) => {
	const { tasks, editTask } = useTasksContext();

	const [tasksInGroup, setTasksInGroup] = useState([]);
	useEffect(() => {
		const filteredTasks = tasks.filter((task) => task.group === groupName);
		setTasksInGroup(filteredTasks);
	}, [tasks, groupName]);

	const [isDraggingOver, setIsDraggingOver] = useState(false);

	const handleDrop = (e) => {
		e.preventDefault();
		const cardId = Number(e.dataTransfer.getData("cardId"));
		let tempTask = tasks.filter((task) => task.id === cardId)[0];
		if (tempTask.group !== groupName) {
			tempTask = { ...tempTask, group: groupName, tags: [...tempTask.tags] };
			editTask(cardId, tempTask);
		}
		setIsDraggingOver(false);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
		setIsDraggingOver(true);
	};

	const handleDragEnter = (e, id) => {
		e.preventDefault();
		if (draggedRef.current !== id) {
			const draggedTask = tasks.filter(
				(task) => task.id === draggedRef.current
			)[0];
			const draggedTaskIndex = tasksInGroup.findIndex(
				(task) => task.id === draggedRef.current
			);
			const targetIndex = tasksInGroup.findIndex((task) => task.id === id);
			let tempTasksInGroup = [...tasksInGroup];
			tempTasksInGroup.splice(draggedTaskIndex, 1);
			tempTasksInGroup.splice(targetIndex, 0, draggedTask);
			// setTasksInGroup(tempTasksInGroup);
			console.log(getDragPosition(id, e.clientY));
		}
	};

	const getDragPosition = (id, y) => {
		const targetCardElement = document.getElementById(id);
		const targetCardElementBox = targetCardElement.getBoundingClientRect();
		const dragPosition =
			y - (targetCardElementBox.top + targetCardElementBox.height / 2);
		return { dragPosition, targetCardElement };
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDraggingOver(false);
	};

	const handleDragStart = (e, cardId) => {
		e.dataTransfer.setData("cardId", cardId);
		draggedRef.current = cardId;
	};

	return (
		<article
			className="w-72 bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3 min-h-screen"
			id={groupName}
		>
			<header className="flex justify-between items-center">
				<h2 className="font-medium capitalize">{groupName}</h2>
				<span className="py-0.5 px-2 max-w-full rounded bg-blue-100 text-sm text-sky-900">
					{tasksInGroup.length}
				</span>
			</header>
			<NewTodo groupName={groupName} />
			<ul
				className={`flex flex-col gap-y-2.5 h-full droppable rounded-md transition-all ${
					isDraggingOver ? " bg-white bg-opacity-70" : "bg-transparent"
				}`}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
			>
				{tasksInGroup.map((task, idx) => {
					return (
						<TodoCard
							{...task}
							key={idx}
							handleDragStart={(e) => {
								handleDragStart(e, task.id);
							}}
							handleDragEnter={(e) => handleDragEnter(e, task.id)}
						/>
					);
				})}
			</ul>
		</article>
	);
};

export default Group;
