import React from "react";

const Modal = () => {
	return (
		<div className="fixed w-screen h-screen bg-white z-50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
			<div className="w-full h-full sm:px-10 flex items-center justify-center">
				<div className="w-full md:w-4/5 lg:w-3/5 bg-red-400 rounded-lg px-5 py-2 ">
					Modal
				</div>
			</div>
		</div>
	);
};

export default Modal;
