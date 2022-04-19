import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// context
import { useSearchAndSortContext } from "../providers/SearchAndSortProvider";
// components
import MoreOptions from "./MoreOptions";
import Tags from "./Tags";
// hooks
import useOnClickOutside from "../hooks/useOnClickOutside";

const TodoCard = ({
	title,
	description,
	id,
	tags,
	handleDragStart,
	DragOver,
}) => {
	const [showDropdown, setShowDropdown] = useState(false);

	const dropDownRef = useRef(null);

	const navigate = useNavigate();

	const { searchValue } = useSearchAndSortContext();

	const [parts, setParts] = useState([]);
	useEffect(() => {
		if (searchValue.length > 0) {
			setParts(title.split(new RegExp(`(${searchValue})`, "gi")));
		}
	}, [searchValue, title]);

	const handleClickOnCard = (e) => {
		if (dropDownRef && !dropDownRef.current.contains(e.target)) {
			navigate(`${id}`);
		}
		return;
	};

	useOnClickOutside(dropDownRef, () => setShowDropdown(false));

	return (
		<li
			className="bg-white rounded-md py-2 px-2.5 cursor-pointer relative draggable"
			onClick={(e) => handleClickOnCard(e)}
			draggable="true"
			onDragStart={handleDragStart}
			onDragOver={DragOver}
			id={id}
		>
			<article className="flex flex-col gap-y-1">
				<header>
					<h3 className="font-medium flex justify-between gap-x-0.5 relative">
						<span className="pr-6">
							{searchValue.length > 0 ? (
								parts.map((part, idx) => {
									if (part.toLowerCase() === searchValue.toLowerCase()) {
										return <mark key={idx}>{part}</mark>;
									} else {
										return <span key={idx}>{part}</span>;
									}
								})
							) : (
								<>{title}</>
							)}
						</span>
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
		</li>
	);
};

export default TodoCard;
