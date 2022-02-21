import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTodo = () => {
	return (
		<div className="flex flex-col gap-y-2">
			<input
				type="text"
				placeholder="Enter Todo..."
				className="h-9 rounded-md px-2 outline-none focus:ring-2"
			/>
			<button className="bg-blue-100 rounded-md flex items-center justify-center w-full h-9">
				<FontAwesomeIcon icon={faPlus} className="text-sky-900" />
			</button>
		</div>
	);
};

export default NewTodo;
