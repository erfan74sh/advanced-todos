import React from "react";
// components
import Sort from "./Sort";

const Header = () => {
	return (
		<header className="py-8 px-1 flex items-center justify-between gap-x-5">
			<h1 className="text-3xl font-medium max-w-full">Todo List...</h1>
			<Sort />
		</header>
	);
};

export default Header;
