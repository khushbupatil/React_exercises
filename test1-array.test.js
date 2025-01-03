const { default: TestRunner} = require("jest-runner");
const calculate1 = require('./test1-array');

test('This function returns the addition of an array', () =>{
    expect(calculate1([1,2,3,6])).toBe(12);
})