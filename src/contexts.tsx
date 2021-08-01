import React, { createContext, useState } from 'react';
import { Task } from './types';

const defaultTask: Task[] = [
	{
		content: 'first',
		id: 1,
		status: 'TODO',
	},
	{
		content: 'second',
		id: 2,
		status: 'TODO',
	},
];

export const TaskContext = createContext<{ tasks: Task[]; updateTasks: (tasks: Task[]) => void }>({
	tasks: [],
	updateTasks: (tasks: Task[]) => {},
});

export const TaskContextProvider = (props: any) => {
	const [tasks, setTasks] = useState(defaultTask);

	const updateTasks = (tasks: Task[]) => {
		setTasks(tasks);
	};
	return (
		<TaskContext.Provider value={{ tasks, updateTasks }}>{props.children}</TaskContext.Provider>
	);
};
