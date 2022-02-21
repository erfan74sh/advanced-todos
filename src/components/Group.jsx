import React from "react";

const Group = () => {
	return (
		<article className="w-72 bg-blue-50 rounded-xl p-4 flex flex-col gap-y-3">
			<header className="flex justify-between items-center">
				<h2 className="font-medium capitalize">group name</h2>
				<span className="py-0.5 px-2 max-w-full rounded bg-blue-100">2</span>
			</header>
			<div>
				<input type="text" />
			</div>
			<ul className="flex flex-col gap-y-2">
				<li>todo card here</li>
			</ul>
		</article>
	);
};

export default Group;
