import React from "react";

const Footer = () => {
	return (
		<div className="flex items-center justify-center py-10">
			<span>
				View Project on{" "}
				<a
					href="https://github.com/erfan74sh/advanced-todos.git"
					target="_blank"
					rel="noreferrer"
					className="italic font-medium"
				>
					Github
				</a>
			</span>
		</div>
	);
};

export default Footer;
