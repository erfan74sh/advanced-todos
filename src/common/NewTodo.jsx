import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTodo = () => {
	const [newTodo, setNewTodo] = useState("");
	const [expand, setExpand] = useState(true);

	const handleClick = (e) => {
		e.preventDefault();
		if (expand) {
			setExpand(!expand);
			inputRef.current.focus();
		} else if (!expand && newTodo.length > 0) {
			setExpand(!expand);
			setNewTodo("");
		} else {
			setExpand(!expand);
		}
	};

	const handleOnChangeInput = (e) => {
		setNewTodo(e.target.value);
	};

	const inputRef = useRef(null);

	return (
		<div className="flex">
			<div
				className={`${expand ? "w-0" : ""} h-9 transition-transform flex-grow`}
			>
				<input
					type="text"
					placeholder="Enter Todo..."
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
