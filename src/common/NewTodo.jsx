import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const NewTodo = () => {
	return (
		<div>
			<button>
				<FontAwesomeIcon icon={faPlus} />
			</button>
		</div>
	);
};

export default NewTodo;
