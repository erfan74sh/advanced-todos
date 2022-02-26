import React from "react";

const MoveToGroup = () => {
	return (
		<ul className="absolute left-full transform translate-x-4 bg-white rounded shadow-md p-2.5 flex flex-col top-0">
			<li className="">
				<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
					<input
						type="radio"
						name="groupName"
						value="todo"
						className="hidden"
					/>
					<span>todo</span>
				</label>
			</li>
			<li className="">
				<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
					<input
						type="radio"
						name="groupName"
						value="doing"
						className="hidden"
					/>
					<span>doing</span>
				</label>
			</li>
			<li className="">
				<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
					<input
						type="radio"
						name="groupName"
						value="completed"
						className="hidden"
					/>
					<span>completed</span>
				</label>
			</li>
		</ul>
	);
};

export default MoveToGroup;
