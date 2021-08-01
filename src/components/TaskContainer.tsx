import React from 'react';
import '../App.css';
import { Task } from '../types';
import { TaskContent } from './TaskContent';

const TaskContainer = ({ name, tasks }: { name: string; tasks: Task[] }) => {
	return (
		<>
			<div className={`container task-container`}>
				<div className="task-container-title">{name}</div>

				{tasks.map((task, index) => (
					<TaskContent key={index} task={task} />
				))}
			</div>
		</>
	);
};

export default TaskContainer;
