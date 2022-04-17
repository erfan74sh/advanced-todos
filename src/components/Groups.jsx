import React, { useRef } from "react";
// components
import Group from "../common/Group";

const Groups = () => {
	const draggedRef = useRef();

	const draggedTargetRef = useRef();

	return (
		<div className="flex justify-between">
			<Group
				groupName="todo"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
			<Group
				groupName="doing"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
			<Group
				groupName="completed"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
		</div>
	);
};

export default Groups;
