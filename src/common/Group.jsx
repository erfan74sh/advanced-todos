import React, { useEffect, useState } from "react";
// components
import TodoCard from "./TodoCard";
import NewTodo from "./NewTodo";
import { useTasksContext } from "../providers/TasksProvider";

const Group = ({ groupName, draggedRef, draggedTargetRef }) => {
	const { tasks, reOrderTasks } = useTasksContext();

	const [tasksInGroup, setTasksInGroup] = useState([]);
	useEffect(() => {
		const filteredTasks = tasks.filter((task) => task.group === groupName);
		setTasksInGroup(filteredTasks);
	}, [tasks, groupName]);

	const [isDraggingOver, setIsDraggingOver] = useState(false);

	const [showDragIndicator, setShowDragIndicator] = useState(false);

	const [indicatorPos, setIndicatorPos] = useState(6);

	const handleDrop = (e) => {
		e.preventDefault();
		const cardId = Number(e.dataTransfer.getData("cardId"));
		let tempTask = tasks.filter((task) => task.id === cardId)[0];
		setIsDraggingOver(false);
		setShowDragIndicator(false);
		const { dragPosition } = getDragPosition(
			draggedTargetRef.current,
			e.clientY
		);
		if (tempTask.group !== groupName) {
			tempTask = { ...tempTask, group: groupName, tags: [...tempTask.tags] };
			reOrderTasks(
				draggedRef.current,
				draggedTargetRef.current,
				dragPosition,
				tempTask
			);
		} else {
			reOrderTasks(draggedRef.current, draggedTargetRef.current, dragPosition);
		}
		setIndicatorPos(6);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		e.dataTransfer.dropEffect = "move";
		setIsDraggingOver(true);
		setShowDragIndicator(true);
	};

	const handleDragOverCard = (e, id) => {
		e.preventDefault();
		draggedTargetRef.current = id;
		if (draggedRef.current !== id) {
			const { dragPosition, dragTargetCard } = getDragPosition(id, e.clientY);
			const targetCardElementBox = dragTargetCard.getBoundingClientRect();
			const currentDropZone = document
				.getElementById(groupName)
				.getElementsByClassName("droppable")[0]
				.getBoundingClientRect();
			let indicatorPosition;
			if (dragPosition < 0) {
				indicatorPosition = currentDropZone.top - targetCardElementBox.top + 6;
			} else {
				indicatorPosition =
					currentDropZone.top - targetCardElementBox.bottom - 6;
			}
			setIndicatorPos(indicatorPosition);
		}
	};

	const getDragPosition = (id, y) => {
		const dragTargetCard = document.getElementById(id);
		const targetCardElementBox = dragTargetCard.getBoundingClientRect();
		const dragPosition =
			y - (targetCardElementBox.top + targetCardElementBox.height / 2);
		return { dragPosition, dragTargetCard };
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDraggingOver(false);
		setShowDragIndicator(false);
		setIndicatorPos(6);
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
				className={`flex flex-col gap-y-3 h-full droppable rounded-md transition-all relative ${
					isDraggingOver ? " bg-white bg-opacity-70" : "bg-transparent"
				}`}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
			>
				{showDragIndicator && (
					<span
						style={{ top: -indicatorPos }}
						className="drag-indicator w-full block h-1 bg-opacity-60 ring-blue-100 bg-sky-400 absolute rounded-full transform -translate-y-1/2 left-0"
					></span>
				)}
				{tasksInGroup.map((task, idx) => {
					return (
						<TodoCard
							{...task}
							key={idx}
							handleDragStart={(e) => {
								handleDragStart(e, task.id);
							}}
							DragOver={(e) => handleDragOverCard(e, task.id)}
						/>
					);
				})}
			</ul>
		</article>
	);
};

export default Group;
