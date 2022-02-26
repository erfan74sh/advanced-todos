import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const MoveToGroup = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	return (
		<>
			<div
				className={`flex justify-between rounded-t px-2 py-1 ${
					showDropdown && "shadow-md"
				}`}
				onClick={() => handleShowDropdown()}
			>
				<span>status</span>
				<span>
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</div>
			{showDropdown && (
				<form className="absolute left-0 w-full bg-white rounded-b shadow-md p-2.5 flex flex-col top-full border-t-2">
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input
							type="radio"
							name="groupName"
							value="todo"
							className="hidden"
						/>
						<span>todo</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input
							type="radio"
							name="groupName"
							value="doing"
							className="hidden"
						/>
						<span>doing</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input
							type="radio"
							name="groupName"
							value="completed"
							className="hidden"
						/>
						<span>completed</span>
					</label>
				</form>
			)}
		</>
	);
};

export default MoveToGroup;
