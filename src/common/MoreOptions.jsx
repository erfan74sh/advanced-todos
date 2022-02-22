import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// icons
import {
	faEllipsisVertical,
	faTrashCan,
	faClone,
	faRightFromBracket,
	faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

const MoreOptions = ({ handleDropdown, showDropdown }) => {
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
					onClick={() => handleDropdown()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>rename</span>
				</li>
				<li
					className="flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleDropdown()}
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
					onClick={() => handleDropdown()}
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
					className="flex gap-x-2 items-center px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75"
					onClick={() => handleDropdown()}
				>
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faRightFromBracket}
							className="text-sm text-neutral-400"
						/>
					</span>
					<span>move to</span>
				</li>
			</ul>
		</>
	);
};

export default MoreOptions;
