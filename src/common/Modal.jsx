import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";

const Modal = () => {
	const navigate = useNavigate();
	const modalBgRef = useRef(null);

	const onClickOutside = () => {
		navigate("/");
	};

	useOnClickOutside(modalBgRef, onClickOutside);

	return (
		<div className="fixed w-screen h-screen bg-white z-50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
			<div className="w-full h-full sm:px-10 flex items-center justify-center">
				<div
					className="w-full md:w-4/5 lg:w-3/5 bg-red-400 rounded-lg px-5 py-2 "
					ref={modalBgRef}
				>
					Modal
				</div>
			</div>
		</div>
	);
};

export default Modal;
