import Calibrator from '../src/model/calibrator';
import puzzleInput from '../src/data/puzzleInput';
const inputMockup = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const advancedInputMocup = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

describe("Calibrator", () => {
    describe("getNumbers", () => {
        const calibrator = new Calibrator(inputMockup);
        it("Should return only numbers from the string", 
            () => expect(calibrator.getNumbers('1abc2')).toStrictEqual(['1','2']))
        it("Should return only numbers from the string", 
            () => expect(calibrator.getNumbers('8seven4s…')).toStrictEqual(['8','4']))
        it("Should return only numbers from the string", 
            () => expect(calibrator.getNumbers('5sevenfrqgpvqx')).toStrictEqual(['5']))
        it("Should return only numbers from the string", 
            () => expect(calibrator.getNumbers('fourbtkgjrg3lhxvccbjlnxlb5...hvsevenfourzjhcgmrr5')).toStrictEqual(['3','5','5']))
    });
    describe("getCalibrationValue", () => {
        const calibrator = new Calibrator(inputMockup);
        it("Should return the calibration value from list of numbers of string type", 
            () => expect(calibrator.getCalibrationValue(['1','2','3'])).toBe(13))
        it("Should return the calibration value from list of numbers of string type", 
            () => expect(calibrator.getCalibrationValue(['6','9'])).toBe(69))
        it("Should return the calibration value from list of numbers of string type", 
            () => expect(calibrator.getCalibrationValue(['7'])).toBe(77))
        it("Should return the calibration value from list of numbers of string type", 
            () => expect(calibrator.getCalibrationValue(calibrator.getNumbers('fourbtkgjrg3lhxvccbjlnxlb5...hvsevenfourzjhcgmrr5'))).toBe(35))
        it("Should return the calibration value from list of numbers of string type", 
            () => expect(calibrator.getCalibrationValue(calibrator.getNumbers('...2'))).toBe(22))
    });
    describe("computeCalibration - Part One", () => {
        const calibrator = new Calibrator(inputMockup);
        it("Should return the total calibration value", 
            () => expect(calibrator.computeCalibration()).toBe(142))
    });
    describe("computeCalibration - Part Two ", () => {
        const calibrator = new Calibrator(advancedInputMocup);
        it("Should return the total calibration value", 
            () => expect(calibrator.computeCalibration()).toBe(281))
    });
});