const {sum, promiseSum} = require('./sum.js');

describe('простые тесты', () =>{
	test('сумма 3 и 5 будет равна 8', () => {
		expect(sum(3, 5)).toBe(8);
	});

	test('сумма 3, 2 и 5 будет равна 10', () => {
		expect(sum(3, 2, 5)).toBe(10);
	});
})

describe('тесты с setup', () =>{
	beforeEach(() => {
		a = 5
	})

	test('сумма a и 5 будет равна 10', () => {
		expect(sum(a, 5)).toBe(10);
	});
	a = 55
	test('сумма a и 5 будет равна 10', () => {
		expect(sum(a, 5)).toBe(10);
	});
})

describe('тесты с промисом', () =>{
	test('сумма 5 и 5 будет равна 10', () => {
		return promiseSum(5,5)
			.then(data => {expect(data).toBe(10)})
	})
})

describe('тесты с моком', () =>{
	test('фргаментов в sum', () => {
		const mockFn = jest.fn(sum)
		mockFn(3,4,5)
		expect(mockFn.mock.calls.length).toBe(1);
		expect(mockFn.mock.calls[0][0]).toBe(3);
		expect(mockFn.mock.calls[0][1]).toBe(4);
		expect(mockFn.mock.calls[0][2]).toBe(5);
		expect(mockFn.mock.results[0].value).toBe(12);
	})
})