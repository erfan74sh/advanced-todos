import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// assets
import ProfilPic from "../assets/myPic.jpg";
// icons
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faInstagramSquare,
	faLinkedin,
	faTwitterSquare,
	faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
	return (
		<div className="w-full sm:w-auto flex items-center gap-x-3 text-sky-900">
			<ul className="flex items-center gap-x-2 text-2xl mr-auto">
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<a href="https://github.com/erfan74sh" className="w-full h-full">
						<FontAwesomeIcon icon={faGithubSquare} className="w-full h-full" />
					</a>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<a
						href="https://www.instagram.com/erfanshafiee/"
						className="w-full h-full"
					>
						<FontAwesomeIcon
							icon={faInstagramSquare}
							className="w-full h-full"
						/>
					</a>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<a
						href="https://www.linkedin.com/in/erfan-shafiee/"
						className="w-full h-full"
					>
						<FontAwesomeIcon icon={faLinkedin} className="w-full h-full" />
					</a>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<a href="https://twitter.com/erfan95sh" className="w-full h-full">
						<FontAwesomeIcon icon={faTwitterSquare} className="w-full h-full" />
					</a>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<a href="mailto:erfanshafiee.dev@gmail.com" className="w-full h-full">
						<FontAwesomeIcon
							icon={faSquareEnvelope}
							className="w-full h-full"
						/>
					</a>
				</li>
			</ul>
			<div className="flex items-center gap-x-2 ring-2 rounded-md pl-2">
				<span className="leading-none font-medium">erfan shafiee</span>
				<img
					src={ProfilPic}
					alt="erfan shafiee"
					className="w-9 h-9 rounded-md"
				/>
			</div>
		</div>
	);
};

export default Profile;
