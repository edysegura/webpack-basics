export default class BMIService {

    static getIndex(weight, height) {
        if (typeof (weight) === 'number' && typeof (height) === 'number') {
            return weight / (height * height);
        }
        return null;
    }

}