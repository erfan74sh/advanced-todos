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

const MoreOptions = () => {
	return (
		<>
			<span className="bg-stone-50 w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-stone-200 rounded transition">
				<FontAwesomeIcon icon={faEllipsisVertical} className="text-sky-900" />
			</span>
			<ul className="bg-stone-50 absolute z-10 top-full transform translate-y-1 p-2.5 rounded shadow-md">
				<li className="flex gap-x-2 items-center">
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faPenToSquare}
							className="text-sm text-zinc-400"
						/>
					</span>
					<span>rename</span>
				</li>
				<li className="flex gap-x-2 items-center">
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faTrashCan}
							className="text-sm text-zinc-400"
						/>
					</span>
					<span>delete</span>
				</li>
				<li className="flex gap-x-2 items-center">
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon icon={faClone} className="text-sm text-zinc-400" />
					</span>
					<span>duplicate</span>
				</li>
				<li className="flex gap-x-2 items-center">
					<span className="w-4 h-4  flex items-center justify-center">
						<FontAwesomeIcon
							icon={faRightFromBracket}
							className="text-sm text-zinc-400"
						/>
					</span>
					<span>move to</span>
				</li>
			</ul>
		</>
	);
};

export default MoreOptions;
