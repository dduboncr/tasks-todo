import React, { useContext, useState } from 'react';
import TaskContainer from './components/TaskContainer';
import { TaskContext } from './contexts';
import { Task } from './types';

export function ChallengeComponent(props: any) {
	const { tasks, updateTasks } = useContext(TaskContext);

	const [newTask, setNewTask] = useState<Task>({} as Task);

	const addTask = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();

		tasks.push(newTask);
		updateTasks([...tasks]);
	};

	const onInputAddTask = (event: React.FormEvent<HTMLInputElement>) => {
		setNewTask({
			id: tasks.length + 1,
			status: 'TODO',
			content: event.currentTarget.value,
		});
		console.log(newTask);
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<TaskContainer tasks={tasks.filter((task) => task.status === 'TODO')} name="To Do" />
				</div>
				<div className="col">
					<TaskContainer
						tasks={tasks.filter((task) => task.status === 'INPROGRESS')}
						name="In progress"
					/>
				</div>
				<div className="col">
					<TaskContainer tasks={tasks.filter((t) => t.status === 'DONE')} name="Done" />
				</div>
			</div>

			<div className="row">
				<div className="col-2">
					<input
						onChange={onInputAddTask}
						type="text"
						placeholder="Add Task"
						value={newTask.content}
						className="add-task-input"
					/>
				</div>
				<div className="col-2">
					<button onClick={addTask} className="add-task-button" value="Add Task">
						+
					</button>
				</div>
			</div>
		</div>
	);
}
