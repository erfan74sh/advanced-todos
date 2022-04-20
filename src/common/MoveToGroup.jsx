import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// iconst
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "../hooks/useOnClickOutside";

const MoveToGroup = ({ handleTaskChange, taskGroup }) => {
	const moveToGroupRef = useRef(null);

	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	const handleOnChange = (e) => {
		handleTaskChange(e);
		handleShowDropdown();
	};

	useOnClickOutside(moveToGroupRef, () => setShowDropdown(false));

	return (
		<div ref={moveToGroupRef}>
			<div
				className={`flex justify-between rounded px-2 py-1 hover:bg-slate-50 cursor-pointer transition-all ${
					showDropdown && "shadow-md rounded-b-none"
				}`}
				onClick={() => handleShowDropdown()}
			>
				<span>{taskGroup}</span>
				<span className="text-zinc-600">
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</div>
			{showDropdown && (
				<form
					className="absolute left-0 w-full bg-white rounded-b shadow-md p-2.5 flex flex-col top-full border-t-2 z-20"
					onInput={(e) => handleOnChange(e)}
				>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input type="radio" name="group" value="ToDo" className="hidden" />
						<span>ToDo</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input type="radio" name="group" value="Doing" className="hidden" />
						<span>Doing</span>
					</label>
					<label className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 ">
						<input type="radio" name="group" value="Done" className="hidden" />
						<span>Done</span>
					</label>
				</form>
			)}
		</div>
	);
};

export default MoveToGroup;
