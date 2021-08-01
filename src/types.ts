export interface Task {
	id: number;
	content: string;
	status: 'TODO' | 'INPROGRESS' | 'DONE';
}
