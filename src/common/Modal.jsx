import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import MoreOptions from "./MoreOptions";
import AddTags from "./AddTags";
import MoveToGroup from "./MoveToGroup";
// hooks
import useOnClickOutside from "../hooks/useOnClickOutside";
// context
import { useTasksContext } from "../providers/TasksProvider";
// icons
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
	const { tasks, editTask } = useTasksContext();
	const { taskId } = useParams();
	const navigate = useNavigate();
	const modalBgRef = useRef(null);

	const [taskToEdit, setTaskToEdit] = useState({
		title: "",
		description: "",
		group: "",
	});
	useEffect(() => {
		const thisTask = tasks.filter((task) => task.id === parseInt(taskId))?.[0];
		thisTask && setTaskToEdit({ ...thisTask });
		console.log(thisTask);
	}, [tasks, taskId]);

	const onClickOutside = () => {
		navigate("/");
	};

	useOnClickOutside(modalBgRef, onClickOutside);

	const handleTaskChange = (e) => {
		setTaskToEdit({ ...taskToEdit, [e.target.name]: e.target.value });
	};

	const handleTaskUpdate = () => {
		editTask(taskToEdit.id, taskToEdit);
		navigate("/");
	};

	const handleOnclickNext = () => {
		const tasksInGroup = tasks.filter(
			(task) => task.group === taskToEdit.group
		);
		const currentTaskIndex = tasksInGroup.findIndex(
			(task) => task.id === taskToEdit.id
		);
		if (currentTaskIndex < tasksInGroup.length - 1) {
			const nextTaskId = tasksInGroup[currentTaskIndex + 1].id;
			console.log(nextTaskId);
			navigate(`/${nextTaskId}`);
		} else return;
	};

	return (
		<div className="fixed w-screen h-screen bg-gray-300 z-10 bg-opacity-60 backdrop-filter backdrop-blur-sm">
			<div className="w-full h-full sm:px-10 flex items-center justify-center">
				<div
					className="w-full md:w-4/5 lg:w-3/5 h-2/3 overflow-y-scroll bg-white shadow-2xl rounded-lg px-5 py-2 "
					ref={modalBgRef}
				>
					<nav className="flex justify-between items-center">
						<div className="flex items-center gap-x-1">
							<span className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors">
								<FontAwesomeIcon icon={faChevronUp} />
							</span>
							<span
								className="w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors"
								onClick={() => handleOnclickNext()}
							>
								<FontAwesomeIcon icon={faChevronDown} />
							</span>
						</div>
						<MoreOptions />
					</nav>
					<article className="flex flex-col gap-y-4 mt-10 px-10 py-5">
						<header>
							<form>
								<input
									type="text"
									value={taskToEdit.title}
									name="title"
									onChange={(e) => handleTaskChange(e)}
									placeholder="Todo title..."
									className="text-4xl font-bold outline-none text-stone-700 bg-transparent"
								/>
							</form>
						</header>
						<section className="border-b-2 pb-2">
							<ul className="flex flex-col gap-y-3">
								<li className="flex gap-x-4">
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">created date:</span>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">
										{taskToEdit.createdDate}
									</span>
								</li>
								<li className="flex gap-x-4 relative">
									<div className="w-1/2 sm:w-1/3 lg:w-1/4 relative">
										<MoveToGroup
											taskId={taskToEdit.id}
											handleTaskChange={handleTaskChange}
										/>
									</div>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">
										{taskToEdit.group}
									</span>
								</li>
								<li className="flex gap-x-4">
									<div className="w-1/2 sm:w-1/3 lg:w-1/4 relative">
										<AddTags />
									</div>
									<span className="w-1/2 sm:w-1/3 lg:w-1/4">tags...</span>
								</li>
							</ul>
						</section>
						<section className="flex-grow">
							<textarea
								value={taskToEdit.description}
								placeholder="more description..."
								name="description"
								className="outline-none w-full bg-transparent"
								onChange={(e) => handleTaskChange(e)}
							/>
						</section>
						<button onClick={() => handleTaskUpdate()}>update</button>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Modal;
