import React, { useRef } from "react";
// components
import Group from "../common/Group";

const Groups = () => {
	const draggedRef = useRef();

	const draggedTargetRef = useRef();

	return (
		<div className="flex justify-between gap-x-2 flex-col gap-y-2 sm:flex-row items-stretch">
			<Group
				groupName="ToDo"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
			<Group
				groupName="Doing"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
			<Group
				groupName="Done"
				draggedRef={draggedRef}
				draggedTargetRef={draggedTargetRef}
			/>
		</div>
	);
};

export default Groups;
