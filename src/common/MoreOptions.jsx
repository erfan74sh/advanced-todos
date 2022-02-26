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
	faRightFromBracket,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import MoveToGroup from "./MoveToGroup";

const MoreOptions = ({ handleDropdown, showDropdown, taskId }) => {
	const navigate = useNavigate()
	const { removeTask, duplicateTask} = useTasksContext()

	const handleRemoveTask = () => {
		removeTask(taskId);
		handleDropdown()
	}

	const handleDuplicateTask = () => {
		duplicateTask(taskId);
		handleDropdown()
	}

	const handleEditTask = () => {
		navigate(`${taskId}`)
		handleDropdown()
	}

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
					<span>edit</span>
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
					<span>delete</span>
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
					<span>duplicate</span>
				</li>
				<li
					className="relative flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleDropdown()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faRightFromBracket}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>move to</span>
					<MoveToGroup/>
				</li>
			</ul>
		</>
	);
};

export default MoreOptions;
