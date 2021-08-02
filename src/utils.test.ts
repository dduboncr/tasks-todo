import { decrease, getStatus, increase } from './utils';
describe('utils', () => {
	describe('utils.increase', () => {
		it('should increase to 1', () => {
			expect(increase(0)).toBe(1);
		});
		it('should increase to 2', () => {
			expect(increase(1)).toBe(2);
		});
		it('should stay on 2', () => {
			expect(increase(2)).toBe(2);
		});
	});
	describe('utils.descrease', () => {
		it('should descrease to 0', () => {
			expect(decrease(1)).toBe(0);
		});
		it('should decrease to 1', () => {
			expect(decrease(2)).toBe(1);
		});
		it('should stay on 2', () => {
			expect(decrease(3)).toBe(2);
		});
	});

	describe('utils.getStatus', () => {
		it('should get next status INPROGRESS', () => {
			expect(getStatus('TODO', increase)).toBe('INPROGRESS');
		});
		it('should get next status DONE', () => {
			expect(getStatus('INPROGRESS', increase)).toBe('DONE');
		});
		it('should get preveous status INPROGRESS', () => {
			expect(getStatus('DONE', decrease)).toBe('INPROGRESS');
		});

		it('should get same status TODO', () => {
			expect(getStatus('TODO', decrease)).toBe('TODO');
		});
	});
});
