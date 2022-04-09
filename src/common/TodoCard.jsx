import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import MoreOptions from "./MoreOptions";
import Tags from "./Tags";

const TodoCard = ({
	title,
	description,
	id,
	tags,
	handleDragStart,
	handleDragEnter,
}) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const dropDownRef = useRef(null);

	const navigate = useNavigate();

	const handleClickOnCard = (e) => {
		if (dropDownRef && !dropDownRef.current.contains(e.target)) {
			navigate(`${id}`);
		}
		return;
	};

	return (
		<li
			className="bg-white rounded-md py-2 px-2.5 cursor-pointer relative draggable"
			onClick={(e) => handleClickOnCard(e)}
			draggable="true"
			onDragStart={handleDragStart}
			onDragEnter={handleDragEnter}
			id={id}
		>
			<article className="flex flex-col gap-y-1">
				<header>
					<h3 className="font-medium flex justify-between gap-x-0.5 relative">
						<span className="pr-6">{title}</span>
						<div className="absolute right-0" ref={dropDownRef}>
							<MoreOptions
								showDropdown={showDropdown}
								handleDropdown={() => setShowDropdown(!showDropdown)}
								taskId={id}
							/>
						</div>
					</h3>
				</header>
				{description && <section>{description}</section>}
				{tags.length > 0 && (
					<section>
						<Tags tags={tags} />
					</section>
				)}
			</article>
			<span className="block w-full h-0.5 ring-1 ring-blue-100 bg-sky-400 absolute rounded-full transform -translate-y-1.5 left-0 top-0"></span>
		</li>
	);
};

export default TodoCard;
