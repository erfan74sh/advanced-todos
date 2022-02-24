import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// components
import MoreOptions from "./MoreOptions";

const TodoCard = ({ title, description, id }) => {
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
			className="bg-white rounded-md py-2 px-2.5 cursor-pointer"
			onClick={(e) => handleClickOnCard(e)}
		>
			<article>
				<header>
					<h3 className="font-medium flex justify-between gap-x-0.5 relative">
						<span className="pr-6">{title}</span>
						<div className="absolute right-0" ref={dropDownRef}>
							<MoreOptions
								showDropdown={showDropdown}
								handleDropdown={() => setShowDropdown(!showDropdown)}
							/>
						</div>
					</h3>
				</header>
				<section>{description}</section>
			</article>
		</li>
	);
};

export default TodoCard;
