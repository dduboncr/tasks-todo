import { useContext } from 'react';
import { TaskContext } from '../contexts';
import { Task } from '../types';
import { moveBackwards, getStatus, moveForward } from '../utils';

export const TaskContent = ({ task }: { task: Task }) => {
	const { tasks, updateTasks } = useContext(TaskContext);

	/** move task back and forward */
	const onClickArrow = (event: React.MouseEvent<HTMLElement>, handler: (n: number) => number) => {
		event.preventDefault();

		const taskToUpdate = tasks.find((t) => task.id === t.id);

		if (taskToUpdate) {
			taskToUpdate.status = getStatus(task.status, handler);
			updateTasks([...tasks]);
		}
	};

	return (
		<div className={`row task`}>
			<button onClick={(e) => onClickArrow(e, moveBackwards)} className="col arrow-left-button">
				{'<'}
			</button>
			<div className="col task-text-content">{task.content}</div>
			<button onClick={(e) => onClickArrow(e, moveForward)} className="col arrow-right-button">
				{'>'}
			</button>
		</div>
	);
};
