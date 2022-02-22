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
			<ul className="bg-red-500 absolute z-10 top-full transform translate-y-1 p-2.5 rounded">
				<li className="flex gap-x-1 items-center">
					<span className="w-4 h-4 bg-green-600 flex items-center justify-center">
						<FontAwesomeIcon icon={faTrashCan} className="text-sm" />
					</span>
					<span>option</span>
				</li>
				<li className="flex gap-x-1 items-center">
					<span className="w-4 h-4 bg-green-600 flex items-center justify-center">
						<FontAwesomeIcon icon={faTrashCan} className="text-sm" />
					</span>
					<span>option</span>
				</li>
			</ul>
		</>
	);
};

export default MoreOptions;
