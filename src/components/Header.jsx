import React from "react";
import SortOptions from "./SortOptions";

const Header = () => {
	return (
		<header className="py-7 px-1 flex items-center justify-between">
			<h1 className="text-3xl font-medium">Todo List...</h1>
			<SortOptions />
		</header>
	);
};

export default Header;
