import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
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
		<div className="flex items-center gap-x-3 text-sky-900">
			<ul className="flex items-center gap-x-2 text-2xl">
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<Link to="" className="w-full h-full">
						<FontAwesomeIcon icon={faGithubSquare} className="w-full h-full" />
					</Link>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<Link to="" className="w-full h-full">
						<FontAwesomeIcon
							icon={faInstagramSquare}
							className="w-full h-full"
						/>
					</Link>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<Link to="" className="w-full h-full">
						<FontAwesomeIcon icon={faLinkedin} className="w-full h-full" />
					</Link>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<Link to="" className="w-full h-full">
						<FontAwesomeIcon icon={faTwitterSquare} className="w-full h-full" />
					</Link>
				</li>
				<li className="ring-2 rounded-md w-9 h-9 flex items-center justify-center">
					<Link to="" className="w-full h-full">
						<FontAwesomeIcon
							icon={faSquareEnvelope}
							className="w-full h-full"
						/>
					</Link>
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