import React from "react";
import Profile from "./Profile";

const Nav = () => {
	return (
		<nav className="flex justify-between py-9 items-center gap-y-10 sm:flex-row flex-col-reverse">
			<h1 className="text-4xl max-w-full py-10 sm:py-0 text-sky-900 font-black">
				Todo List
			</h1>
			<Profile />
		</nav>
	);
};

export default Nav;
