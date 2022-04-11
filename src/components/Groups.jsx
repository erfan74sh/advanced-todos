import React, { useRef, useState, useEffect } from "react";
// components
import Group from "../common/Group";
import { useTasksContext } from "../providers/TasksProvider";

const Groups = () => {
	const draggedRef = useRef();

	const { tasks } = useTasksContext();

	const [todoTasks, setTodoTasks] = useState([]);
	const [doingTasks, setDoingTasks] = useState([]);
	const [completedTasks, setCompletedTasks] = useState([]);

	useEffect(() => {
		const filteredTodoTasks = tasks.filter((task) => task.group === "todo");
		setTodoTasks(filteredTodoTasks);
		const filteredDoingTasks = tasks.filter((task) => task.group === "doing");
		setDoingTasks(filteredDoingTasks);
		const filteredCompletedTasks = tasks.filter(
			(task) => task.group === "completed"
		);
		setCompletedTasks(filteredCompletedTasks);
	}, [tasks]);

	return (
		<div className="flex gap-x-10 ">
			<Group
				groupName="todo"
				draggedRef={draggedRef}
				tasksInGroup={todoTasks}
			/>
			<Group
				groupName="doing"
				draggedRef={draggedRef}
				tasksInGroup={doingTasks}
			/>
			<Group
				groupName="completed"
				draggedRef={draggedRef}
				tasksInGroup={completedTasks}
			/>
		</div>
	);
};

export default Groups;
