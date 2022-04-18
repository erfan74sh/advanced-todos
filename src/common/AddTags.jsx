import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useTasksContext } from "../providers/TasksProvider";
// components
import Tags from "./Tags";
// icons
import {
	faCaretDown,
	faEllipsisVertical,
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

const ColorDropdown = () => {
	return (
		<ul className="flex flex-col gap-y-1 p-1 rounded-md absolute top-0 z-50">
			{bgColors.map((color, idx) => {
				return (
					<li
						key={idx}
						className="w-20 h-5 rounded"
						style={{ backgroundColor: color }}
					></li>
				);
			})}
		</ul>
	);
};

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
				className={`flex justify-between items-center rounded px-2 py-1 hover:shadow cursor-pointer transition-all ${
					showDropdown && "shadow-md rounded-b-none"
				}`}
				onClick={() => handleShowDropdown()}
			>
				{checkedTags.length ? (
					<Tags tags={checkedTags} />
				) : (
					<span>select tag</span>
				)}
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
								className={`group flex justify-between px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 
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
								{/* {checkedTags.includes(tag.tagName) && (
									<span className="mr-1">
										<FontAwesomeIcon icon={faCheck} className="text-sm" />
									</span>
								)} */}
								<span
									className="px-1 rounded"
									style={{
										backgroundColor:
											checkedTags.includes(tag.tagName) && tag.color,
									}}
								>
									{tag.tagName}
								</span>
								<div className="relative group-hover:opacity-100 hover:bg-gray-400 opacity-0 transition-all rounded-sm px-1 ml-auto">
									<FontAwesomeIcon icon={faEllipsisVertical} />
									<ColorDropdown />
								</div>
							</label>
						);
					})}
				</form>
			)}
		</>
	);
};

export default AddTags;
