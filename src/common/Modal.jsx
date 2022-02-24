import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";
import { useTasksContext } from "./providers/TasksProvider";

const Modal = () => {
	const { tasks } = useTasksContext();
	const { taskId } = useParams();
	const navigate = useNavigate();
	const modalBgRef = useRef(null);

	const [taskToEdit, setTaskToEdit] = useState({});
	useEffect(() => {
		const thisTask = tasks.filter((task) => task.id === parseInt(taskId))?.[0];
		thisTask && setTaskToEdit(thisTask);
	}, [tasks, taskId]);

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
					{taskToEdit.title}
				</div>
			</div>
		</div>
	);
};

export default Modal;
