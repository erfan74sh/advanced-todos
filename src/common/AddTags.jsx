import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// context
import { useTasksContext } from "../providers/TasksProvider";
// iconst
import { faCaretDown, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddTags = ({ taskId }) => {
	const { tags, addTag, addTagToTask } = useTasksContext();

	const [newTagName, setNewTagName] = useState("");
	const handleAddNewTag = () => {
		addTag(newTagName);
		setNewTagName("");
	};

	const handleAddTagToTask = (e) => {
		addTagToTask(taskId, e.target.value);
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
								className="block px-1 py-0.5 hover:bg-stone-200 cursor-pointer rounded font-normal transition-colors duration-75 "
							>
								<input
									type="radio"
									name="tags"
									value={tag}
									className="hidden"
									onInput={handleAddTagToTask}
								/>
								<span>{tag}</span>
							</label>
						);
					})}
				</form>
			)}
		</>
	);
};

export default AddTags;
