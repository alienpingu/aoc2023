import formatter from '../src/utils/formatter';
describe("Formatter", () => {
    
    it("Should return only numbers from the string", 
        () => expect(formatter('two1nine')).toBe('219'))
    it("Should return only numbers from the string", 
        () => expect(formatter('eightwothree')).toBe('8wo3'))
    it("Should return only numbers from the string", 
        () => expect(formatter('abcone2threexyz')).toBe('abc123xyz'))
    it("Should return only numbers from the string", 
        () => expect(formatter('xtwone3four')).toBe('x2ne34'))
    it("Should return only numbers from the string", 
        () => expect(formatter('4nineeightseven2')).toBe('49872'))
    it("Should return only numbers from the string", 
        () => expect(formatter('zoneight234')).toBe('z1ight234'))
    it("Should return only numbers from the string", 
        () => expect(formatter('7pqrstsixteen')).toBe('7pqrst16'))
});