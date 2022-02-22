import React, { useState } from "react";
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
		} else if (!expand && newTodo.length > 0) {
			console.log("add todo");
		} else return;
	};

	const handleOnChangeInput = (e) => {
		setNewTodo(e.target.value);
	};

	return (
		<div className="flex flex-col gap-y-2">
			<input
				type="text"
				placeholder="Enter Todo..."
				className="h-9 rounded-md px-2 outline-none focus:ring-2"
				onChange={(e) => handleOnChangeInput(e)}
			/>
			<button
				type="submit"
				className="bg-blue-100 rounded-md flex items-center justify-center w-full h-9 hover:bg-blue-200 group transition"
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
