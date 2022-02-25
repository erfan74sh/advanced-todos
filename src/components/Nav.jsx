import React from "react";
import Profile from "./Profile";
import Search from "./Search";

const Nav = () => {
	return (
		<nav className="flex justify-between py-9">
			<Search />
			<Profile />
		</nav>
	);
};

export default Nav;
