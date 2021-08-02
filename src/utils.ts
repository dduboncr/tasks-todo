enum status {
	Todo = 'TODO',
	Inprogress = 'INPROGRESS',
	Done = 'DONE',
}

const statusMapper: any = [status.Todo, status.Inprogress, status.Done];

export const getStatus = (
	currentStatus: string,
	move: (index: number) => number
): 'TODO' | 'INPROGRESS' | 'DONE' => {
	const currentStatusIndex = statusMapper.indexOf(currentStatus);

	const nextStatus = move(currentStatusIndex);

	return statusMapper[nextStatus];
};

export const increase = (index: number) => (index + 1 > 2 ? index : index + 1);

export const decrease = (index: number) => (index - 1 < 0 ? index : index - 1);
