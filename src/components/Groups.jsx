import React, { useRef } from "react";
// components
import Group from "../common/Group";

const Groups = () => {
	const draggedRef = useRef();

	return (
		<div className="flex gap-x-10 ">
			<Group groupName="todo" draggedRef={draggedRef} />
			<Group groupName="doing" draggedRef={draggedRef} />
			<Group groupName="completed" draggedRef={draggedRef} />
		</div>
	);
};

export default Groups;
