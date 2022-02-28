import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// iconst
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const MoveToGroup = ({ handleTaskChange }) => {
	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleOnChange = (e) => {
		handleTaskChange(e);
		handleShowDropdown();
	};

	return (
		<>
			<div
				className={`flex justify-between rounded px-2 py-1 hover:shadow cursor-pointer text-zinc-600 transition-all ${
					showDropdown && "shadow-md rounded-b-none"
				}`}
				onClick={() => handleShowDropdown()}
			>
				<span>status</span>
				<span>
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</div>
			{showDropdown && (
				<form
					className="absolute left-0 w-full bg-white rounded-b shadow-md p-2.5 flex flex-col top-full border-t-2 z-20"
					onInput={(e) => handleOnChange(e)}
				>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input type="radio" name="group" value="todo" className="hidden" />
						<span>todo</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input type="radio" name="group" value="doing" className="hidden" />
						<span>doing</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input
							type="radio"
							name="group"
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
