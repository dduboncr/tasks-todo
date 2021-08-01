import { useContext } from 'react';
import { TaskContext } from '../contexts';
import { Task } from '../types';

enum status {
	Todo = 'TODO',
	Inprogress = 'INPROGRESS',
	Done = 'DONE',
}

const statusMapper: any = [status.Todo, status.Inprogress, status.Done];

export const TaskContent = ({ task }: { task: Task }) => {
	const { tasks, updateTasks } = useContext(TaskContext);

	const getStatus = (
		currentStatus: string,
		move: (index: number) => number
	): 'TODO' | 'INPROGRESS' | 'DONE' => {
		const index = statusMapper.indexOf(currentStatus);

		const moveIndex = move(index);
		console.log({
			moveIndex,
		});
		return statusMapper[moveIndex];
	};

	const increase = (index: number) => {
		return index + 1 > 2 ? index : index + 1;
	};

	const decrease = (index: number) => {
		return index - 1 < 0 ? index : index - 1;
	};

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
				Left
			</button>
			<div className="col task-text-content">{task.content}</div>
			<button onClick={moveRight} className="col arrow-right-button">
				Right
			</button>
		</div>
	);
};
