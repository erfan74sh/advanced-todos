import React, { useState } from "react";
import MoreOptions from "./MoreOptions";
// components

const TodoCard = () => {
	const [showDropdown, setShowDropdown] = useState(false);

	return (
		<li className="bg-white rounded-md py-2 px-2.5">
			<article>
				<header>
					<h3 className="font-medium flex justify-between gap-x-0.5 relative">
						<span className="pr-6">title of todo 111111111111111111 11</span>
						<div className="absolute right-0">
							<MoreOptions
								showDropdown={showDropdown}
								handleDropdown={() => setShowDropdown(!showDropdown)}
							/>
						</div>
					</h3>
				</header>
				<section>description or ...</section>
			</article>
		</li>
	);
};

export default TodoCard;
