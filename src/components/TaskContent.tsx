import { useContext } from 'react';
import { TaskContext } from '../contexts';
import { Task } from '../types';
import { decrease, getStatus, increase } from '../utils';

export const TaskContent = ({ task }: { task: Task }) => {
	const { tasks, updateTasks } = useContext(TaskContext);

	const moveRight = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();

		const taskToUpdate = tasks.find((t) => task.id === t.id);

		if (taskToUpdate) {
			taskToUpdate.status = getStatus(task.status, increase);
			updateTasks([...tasks]);
		}
	};

	const moveLeft = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();

		const taskToUpdate = tasks.find((t) => task.id === t.id);

		if (taskToUpdate) {
			taskToUpdate.status = getStatus(task.status, decrease);
			updateTasks([...tasks]);
		}
	};

	return (
		<div className={`row task`}>
			<button onClick={moveLeft} className="col arrow-left-button">
				{'<'}
			</button>
			<div className="col task-text-content">{task.content}</div>
			<button onClick={moveRight} className="col arrow-right-button">
				{'>'}
			</button>
		</div>
	);
};
