import React from "react";
// components
import Group from "../common/Group";

const Groups = () => {
	return (
		<div className="flex gap-x-10 bg-stone-50">
			<Group groupName="todo" />
			<Group groupName="doing" />
			<Group groupName="completed" />
		</div>
	);
};

export default Groups;
