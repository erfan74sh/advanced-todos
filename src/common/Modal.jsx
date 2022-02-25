import {  faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useOnClickOutside from "../hooks/useOnClickOutside";
import MoreOptions from "./MoreOptions";
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
		console.log(thisTask)
	}, [tasks, taskId]);

	const onClickOutside = () => {
		navigate("/");
	};

	useOnClickOutside(modalBgRef, onClickOutside);

	return (
		<div className="fixed w-screen h-screen bg-white z-50 bg-opacity-5 backdrop-filter backdrop-blur-sm">
			<div className="w-full h-full sm:px-10 flex items-center justify-center">
				<div
					className="w-full md:w-4/5 lg:w-3/5 h-2/3 overflow-y-scroll bg-red-400 rounded-lg px-5 py-2 "
					ref={modalBgRef}
				>
				<nav className="flex justify-between items-center">
					<div className="flex items-center gap-x-1">
						<span className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors">
							<FontAwesomeIcon icon={faChevronUp}/>
						</span>
						<span className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors">
							<FontAwesomeIcon icon={faChevronDown}/>
						</span>
					</div>
					<MoreOptions/>
				</nav>
					<article className="flex flex-col gap-y-4 mt-10 px-10 py-5">
						<header>
							<input
								type="text"
								value={taskToEdit.title}
								placeholder="Todo title..."
								className="text-4xl font-bold outline-none text-stone-700"
							/>
						</header>
						<section className="border-b-2 pb-2">
							<ul className="flex flex-col gap-y-3">
								<li className="flex gap-x-4">
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">created date:</span>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">{taskToEdit.createdDate}</span>
								</li>
								<li className="flex gap-x-4">
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">status:</span>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">
										{taskToEdit.group}
									</span>
								</li>
								<li className="flex gap-x-4">
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">tags:</span>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">tags...</span>
								</li>
							</ul>
						</section>
						<section className="flex-grow">
							<textarea
								value={taskToEdit.description}
								placeholder="more description..."
								className="outline-none w-full"
							/>
						</section>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Modal;
