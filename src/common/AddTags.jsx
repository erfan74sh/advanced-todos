import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useTasksContext } from "../providers/TasksProvider";
// components
import Tags from "./Tags";
// icons
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "../hooks/useOnClickOutside";

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
	"#f87171",
	"#fbbf24",
	"#a3e635",
	"#4ade80",
	"#38bdf8",
	"#818cf8",
	"#c084fc",
	"#f472b6",
];

const AddTags = ({ handleCheckedTags, checkedTags }) => {
	const addTagsRef = useRef(null);

	const { tags, addTag } = useTasksContext();

	const [newTagName, setNewTagName] = useState("");
	const handleAddNewTag = () => {
		addTag({
			tagName: newTagName,
			color: bgColors[tags.length] || generateLightColorHex(),
		});
		setNewTagName("");
	};

	const [showDropdown, setShowDropdown] = useState(false);
	const handleShowDropdown = () => {
		setShowDropdown(!showDropdown);
	};

	function generateLightColorHex() {
		let color = "#";
		for (let i = 0; i < 3; i++)
			color += (
				"0" +
				Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
			).slice(-2);
		return color;
	}

	useOnClickOutside(addTagsRef, () => setShowDropdown(false));

	return (
		<div ref={addTagsRef}>
			<div
				className={`flex justify-between items-center rounded px-2 py-1 hover:bg-slate-50 cursor-pointer transition-all ${
					showDropdown && "shadow-md rounded-b-none"
				}`}
				onClick={() => handleShowDropdown()}
			>
				{checkedTags.length ? (
					<Tags tags={checkedTags} />
				) : (
					<span>select tag</span>
				)}
				<span className="text-zinc-600">
					<FontAwesomeIcon icon={faCaretDown} />
				</span>
			</div>
			{showDropdown && (
				<form className="absolute left-0 w-full max-h-40 overflow-y-scroll overflow-x-visible bg-white rounded-b shadow-md p-2.5 flex flex-col top-full border-t-2 z-20">
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
								<span
									className="px-1 rounded"
									style={{
										backgroundColor:
											checkedTags.includes(tag.tagName) && tag.color,
									}}
								>
									{tag.tagName}
								</span>
							</label>
						);
					})}
				</form>
			)}
		</div>
	);
};

export default AddTags;
