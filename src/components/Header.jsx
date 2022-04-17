import React from "react";
// components
import Search from "./Search";
import Sort from "./Sort";

const Header = () => {
	return (
		<header className="sm:py-8 pb-4 px-1 flex items-center justify-between gap-x-5 flex-col sm:flex-row gap-y-2">
			<Search />
			<Sort />
		</header>
	);
};

export default Header;
