import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center py-8 mt-5 gap-y-2 border-t-2">
			<div className="flex items-center gap-x-1">
				You can
				<a
					href="https://coffeebede.ir/buycoffee/erfan74sh"
					target="_blank"
					rel="noreferrer"
					className="font-medium bg-slate-100 transition-colors px-2 py-1 rounded-md"
				>
					buy me a coffee
					<FontAwesomeIcon
						icon={faMugHot}
						className="text-orange-500 text-xl ml-2 fa-bounce"
					/>
				</a>
				to support me ❤️
			</div>
			<span className=" text-sm text-gray-600">
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
