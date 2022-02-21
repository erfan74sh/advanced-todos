import React from "react";

const TodoCard = () => {
	return (
		<li className="bg-white rounded-md py-2 px-2.5">
			<article>
				<header>
					<h3 className="font-medium">title of todo</h3>
				</header>
				<section>description or ...</section>
			</article>
		</li>
	);
};

export default TodoCard;
