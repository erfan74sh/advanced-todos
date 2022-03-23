import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useTasksContext } from "../providers/TasksProvider";
// icons
import {
	faCaretDown,
	faCheck,
	faPlus,
} from "@fortawesome/free-solid-svg-icons";

const bgColors = [
	"#e5e5e5",
	"#a3a3a3",
	"#fecaca",
	"#fde68a",
	"#d9f99d",
	"#bbf7d0",
	"#bae6fd",
	"#c7d2fe",
	"#e9d5ff",
	"#fbcfe8",
];

const AddTags = ({ handleCheckedTags, checkedTags }) => {
	const { tags, addTag } = useTasksContext();

	const [newTagName, setNewTagName] = useState("");
	const handleAddNewTag = () => {
		addTag({ tagName: newTagName, color: bgColors[9] });
		setNewTagName("");
	};

	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};
	return (
		<>
			<div
				className={`flex justify-between rounded px-2 py-1 hover:shadow cursor-pointer text-zinc-600 transition-all ${
					showDropdown && "shadow-md rounded-b-none"
				}`}
				onClick={() => handleShowDropdown()}
			>
				<span>Tags</span>
				<span>
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</div>
			{showDropdown && (
				<form className="absolute left-0 w-full max-h-40 overflow-y-scroll bg-white rounded-b shadow-md p-2.5 flex flex-col top-full border-t-2 z-20">
					<label className="flex px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 focus-within:ring-2 mb-1">
						<input
							type="text"
							name="newTag"
							value={newTagName}
							onChange={(e) => {
								setNewTagName(e.target.value);
							}}
							className="w-full bg-transparent outline-none text-sm"
							placeholder="add new tag..."
						/>
						<span
							className="hover:bg-slate-50 rounded px-1"
							onClick={(e) => handleAddNewTag(e)}
						>
							<FontAwesomeIcon icon={faPlus} className="text-zinc-700" />
						</span>
					</label>
					{tags.map((tag, idx) => {
						return (
							<label
								key={idx}
								className={`flex justify-between px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 
								// todo:
								${checkedTags.includes(tag.tagName) && "font-medium"}
								`}
							>
								<input
									type="checkbox"
									name="tags"
									value={tag.tagName}
									checked={checkedTags.includes(tag.tagName)}
									className="hidden"
									onChange={(e) => handleCheckedTags(e)}
								/>
								<span>{tag.tagName}</span>
								{checkedTags.includes(tag.tagName) && (
									<span>
										<FontAwesomeIcon icon={faCheck} className="text-sm" />
									</span>
								)}
							</label>
						);
					})}
				</form>
			)}
		</>
	);
};

export default AddTags;
