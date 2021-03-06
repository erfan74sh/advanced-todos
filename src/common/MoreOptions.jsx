import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
// context
import { useTasksContext } from "../providers/TasksProvider";
// icons
import {
	faEllipsisVertical,
	faTrashCan,
	faClone,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const MoreOptions = ({
	handleDropdown,
	showDropdown,
	taskId,
	dropDownLeftPos,
}) => {
	const navigate = useNavigate();

	const { removeTask, duplicateTask } = useTasksContext();

	const handleRemoveTask = () => {
		removeTask(taskId);
		handleDropdown();
	};

	const handleDuplicateTask = () => {
		duplicateTask(taskId);
		handleDropdown();
	};

	const handleEditTask = () => {
		navigate(`${taskId}`);
		handleDropdown();
	};

	return (
		<>
			<span
				onClick={() => handleDropdown()}
				className="bg-stone-50 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-stone-200 rounded transition"
			>
				<FontAwesomeIcon icon={faEllipsisVertical} className="text-sky-900" />
			</span>
			<ul
				className={`${
					showDropdown ? "block" : "hidden"
				} bg-white absolute z-10 top-full transform translate-y-1 p-2.5 rounded shadow-md w-40`}
				style={{ left: dropDownLeftPos < 0 ? dropDownLeftPos : 0 }}
			>
				<li
					className="flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleEditTask()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>Edit</span>
				</li>
				<li
					className="flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleRemoveTask()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faTrashCan}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>Delete</span>
				</li>
				<li
					className="flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleDuplicateTask()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faClone}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>Duplicate</span>
				</li>
			</ul>
		</>
	);
};

export default MoreOptions;
