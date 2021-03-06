import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useTasksContext } from "../providers/TasksProvider";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";

const NewTodo = ({ groupName }) => {
	const navigate = useNavigate();
	const { addToGroup } = useTasksContext();

	const [newTodo, setNewTodo] = useState("");
	const [expand, setExpand] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		if (expand) {
			setExpand(!expand);
			inputRef.current.focus();
		} else if (!expand && newTodo.length > 0) {
			const date = new Date();
			const id = date.getTime();
			const createdDate = date.toLocaleString();
			addToGroup({
				title: newTodo,
				description: "",
				group: groupName,
				id,
				createdDate,
				tags: [],
			});
			setExpand(!expand);
			setNewTodo("");
			navigate(`${id}`);
		} else {
			setExpand(!expand);
		}
	};

	const handleOnChangeInput = (e) => {
		setNewTodo(e.target.value);
	};

	const inputRef = useRef(null);

	const newTodoRef = useRef(null);

	useOnClickOutside(newTodoRef, () => setExpand(true));

	return (
		<div className="flex" ref={newTodoRef}>
			<div
				className={`${expand ? "w-0" : ""} h-9 transition-transform flex-grow`}
			>
				<input
					type="text"
					placeholder="Enter Task Title..."
					value={newTodo}
					ref={inputRef}
					className="h-9 rounded-md px-2 outline-none focus:ring-2 overflow-hidden transition-all w-full mr-1"
					onChange={(e) => handleOnChangeInput(e)}
				/>
			</div>
			<button
				type="submit"
				className={`${
					expand ? "w-full" : "w-9 ml-1"
				} bg-blue-100 rounded-md flex items-center justify-center h-9 hover:bg-blue-200 group transition-all`}
				onClick={(e) => handleClick(e)}
			>
				<FontAwesomeIcon
					icon={faPlus}
					className="text-sky-900 transform group-active:scale-125 transition"
				/>
			</button>
		</div>
	);
};

export default NewTodo;
