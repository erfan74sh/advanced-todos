import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// components
import AddTags from "./AddTags";
import MoveToGroup from "./MoveToGroup";
// hooks
import useOnClickOutside from "../hooks/useOnClickOutside";
// context
import { useTasksContext } from "../providers/TasksProvider";
// icons
import {
	faChevronDown,
	faChevronUp,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
	const { tasks, editTask } = useTasksContext();
	const { taskId } = useParams();
	const navigate = useNavigate();
	const modalBgRef = useRef(null);
	const moreDescriptionRef = useRef(null);

	const [taskToEdit, setTaskToEdit] = useState({
		title: "",
		description: "",
		group: "",
		tags: [],
	});
	useEffect(() => {
		const thisTask = tasks.filter((task) => task.id === parseInt(taskId))?.[0];
		thisTask && setTaskToEdit({ ...thisTask });
		if (thisTask.description === "") {
			moreDescriptionRef.current.focus();
		}
	}, [tasks, taskId]);

	const [nextTaskStatus, setNextTaskStatus] = useState({
		prev: false,
		next: false,
	});
	useEffect(() => {
		const tasksInGroup = tasks.filter(
			(task) => task.group === taskToEdit.group
		);
		const currentTaskIndex = tasksInGroup.findIndex(
			(task) => task.id === taskToEdit.id
		);
		if (tasksInGroup.length > 1) {
			if (currentTaskIndex === 0) {
				setNextTaskStatus({ prev: false, next: true });
			} else if (currentTaskIndex === tasksInGroup.length - 1) {
				setNextTaskStatus({ prev: true, next: false });
			} else {
				setNextTaskStatus({ prev: true, next: true });
			}
		}
	}, [tasks, taskToEdit]);

	const [isTaskChanged, setIsTaskChanged] = useState(false);

	const [checkedTags, setCheckedTags] = useState([]);
	useEffect(() => {
		setCheckedTags([...taskToEdit.tags]);
	}, [taskToEdit]);

	const handleCheckedTags = (e) => {
		let tempCheckedTags = [...checkedTags];
		if (e.target.checked) {
			tempCheckedTags.push(e.target.value);
		} else {
			tempCheckedTags.splice(checkedTags.indexOf(e.target.value), 1);
		}
		setCheckedTags(tempCheckedTags);
		setTaskToEdit({
			...taskToEdit,
			tags: [...tempCheckedTags],
		});
		if (!isTaskChanged) {
			setIsTaskChanged(true);
		}
	};

	const onClickOutside = () => {
		navigate("/");
	};

	useOnClickOutside(modalBgRef, onClickOutside);

	const handleTaskChange = (e) => {
		setTaskToEdit({
			...taskToEdit,
			[e.target.name]: e.target.value,
		});
		if (!isTaskChanged) {
			setIsTaskChanged(true);
		}
	};

	const handleTaskUpdate = () => {
		editTask(taskToEdit.id, taskToEdit);
		navigate("/");
	};

	const handleNextTask = (nextOrPrev) => {
		const tasksInGroup = tasks.filter(
			(task) => task.group === taskToEdit.group
		);
		const currentTaskIndex = tasksInGroup.findIndex(
			(task) => task.id === taskToEdit.id
		);
		switch (nextOrPrev) {
			case "next":
				if (currentTaskIndex < tasksInGroup.length - 1) {
					const nextTaskId = tasksInGroup[currentTaskIndex + 1].id;
					navigate(`/${nextTaskId}`);
					break;
				} else return;
			case "prev":
				if (currentTaskIndex > 0) {
					const prevTaskId = tasksInGroup[currentTaskIndex - 1].id;
					navigate(`/${prevTaskId}`);
					break;
				} else return;
			default:
				return;
		}
	};

	return (
		<div className="fixed w-screen h-screen bg-gray-300 z-50 bg-opacity-60 backdrop-filter backdrop-blur-sm">
			<div className="w-full h-full sm:px-10 flex items-center justify-center">
				<div
					className="w-full md:w-4/5 lg:w-3/5 max-h-full overflow-y-auto bg-white shadow-2xl rounded-lg px-5 pb-3"
					ref={modalBgRef}
				>
					<nav className="flex justify-between items-center sticky top-0 bg-white pt-3 z-50">
						<div className="flex items-center gap-x-1">
							<button
								className={`w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors text-zinc-700 ${
									!nextTaskStatus.prev && "pointer-events-none text-zinc-300"
								}`}
								onClick={() => handleNextTask("prev")}
							>
								<FontAwesomeIcon icon={faChevronUp} />
							</button>
							<button
								className={`w-6 h-6 flex items-center justify-center hover:bg-zinc-100 rounded transition-colors text-zinc-700 ${
									!nextTaskStatus.next && "pointer-events-none text-zinc-300"
								}`}
								onClick={() => handleNextTask("next")}
							>
								<FontAwesomeIcon icon={faChevronDown} />
							</button>
						</div>
						<button
							className="text-zinc-400 hover:text-zinc-600 cursor-pointer transition-colors text-lg"
							onClick={onClickOutside}
						>
							<FontAwesomeIcon icon={faXmark} size="1x" />
						</button>
					</nav>
					<article className="flex flex-col gap-y-4 mt-6 sm:px-10 py-5">
						<header>
							<form>
								<input
									type="text"
									value={taskToEdit.title}
									name="title"
									onChange={(e) => handleTaskChange(e)}
									placeholder="Todo title..."
									className="text-4xl font-bold outline-none text-stone-700 bg-transparent w-full hover:bg-slate-50 px-1.5 py-1 rounded-md focus:ring-2"
								/>
							</form>
						</header>
						<section className="border-b-2 pb-2">
							<ul className="flex flex-col gap-y-3">
								<li className="flex gap-x-4 items-center cursor-default">
									<span className="w-28 px-2 py-1 text-zinc-600">
										created date:
									</span>
									<span className="flex-grow max-w-xs pl-2">
										{taskToEdit.createdDate}
									</span>
								</li>
								<li className="flex gap-x-4 relative">
									<span className="w-28 px-2 py-1 text-zinc-600 cursor-default">
										status:
									</span>
									<div className="flex-grow max-w-xs relative">
										<MoveToGroup
											taskId={taskToEdit.id}
											taskGroup={taskToEdit.group}
											handleTaskChange={handleTaskChange}
										/>
									</div>
								</li>
								<li className="flex gap-x-4">
									<span className="w-28 px-2 py-1 text-zinc-600 cursor-default">
										tags:
									</span>
									<div className="flex-grow max-w-xs relative">
										<AddTags
											handleCheckedTags={handleCheckedTags}
											checkedTags={checkedTags}
										/>
									</div>
								</li>
							</ul>
						</section>
						<section className="flex-grow">
							<textarea
								value={taskToEdit.description}
								placeholder="more description..."
								name="description"
								ref={moreDescriptionRef}
								rows={4}
								className="outline-none w-full bg-transparent hover:bg-slate-50 px-1.5 py-1 rounded-md focus:ring-2 overflow-y-auto resize-none"
								onChange={(e) => handleTaskChange(e)}
							/>
						</section>
						<section className="self-end flex items-center gap-x-2">
							<button
								onClick={() => navigate("/")}
								className="border-red-300 border-2 px-6 py-1.5 rounded-md"
							>
								Cancel
							</button>
							{isTaskChanged && (
								<button
									onClick={() => handleTaskUpdate()}
									className="bg-blue-300 border-2 border-transparent px-6 py-1.5 rounded-md"
								>
									Update
								</button>
							)}
						</section>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Modal;
