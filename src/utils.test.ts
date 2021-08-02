import { moveBackwards, getStatus, moveForward } from './utils';
describe('utils', () => {
	describe('utils.moveForward', () => {
		it('should moveForward to 1', () => {
			expect(moveForward(0)).toBe(1);
		});
		it('should moveForward to 2', () => {
			expect(moveForward(1)).toBe(2);
		});
		it('should stay on 2', () => {
			expect(moveForward(2)).toBe(2);
		});
	});
	describe('utils.moveBackwards', () => {
		it('should moveBackwards to 0', () => {
			expect(moveBackwards(1)).toBe(0);
		});
		it('should decrease to 1', () => {
			expect(moveBackwards(2)).toBe(1);
		});
		it('should stay on 2', () => {
			expect(moveBackwards(3)).toBe(2);
		});
	});

	describe('utils.getStatus', () => {
		it('should get next status INPROGRESS', () => {
			expect(getStatus('TODO', moveForward)).toBe('INPROGRESS');
		});
		it('should get next status DONE', () => {
			expect(getStatus('INPROGRESS', moveForward)).toBe('DONE');
		});
		it('should get preveous status INPROGRESS', () => {
			expect(getStatus('DONE', moveBackwards)).toBe('INPROGRESS');
		});

		it('should get same status TODO', () => {
			expect(getStatus('TODO', moveBackwards)).toBe('TODO');
		});
	});
});
