import formatter from "../utils/formatter";

export default class Calibrator {
    calibrationDocument: string;

    constructor(calibrationDocument:string) {
        this.calibrationDocument = calibrationDocument;
    }

    getNumbers = (calibrationRow: string):string[] => calibrationRow.split("").filter(char => parseInt(char));

    getCalibrationValue = (numbers: string[]):number => parseInt(numbers[0]+numbers[numbers.length-1]);
    
    computeCalibration = ():number => {
        let calibrationResult = 0;
        this.calibrationDocument.split(/\n/).forEach(calibrationRow => {
            const formattedRow = formatter(calibrationRow) 
            const numbers = this.getNumbers(formattedRow)
            const calibrationValue = this.getCalibrationValue(numbers); 
            calibrationResult += calibrationValue;
        });
        return calibrationResult;
    }
}