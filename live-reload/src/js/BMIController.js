import BMIService from './BMIService';

export default class BMIController {

    static init() {
        BMIController.setForm();
    }

    static setForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', function (event) {
            BMIController.calculateBMI(form);
            //it is necessary to avoid form submition
            event.preventDefault();
        });
    }

    static calculateBMI(form) {
        let
            weight = parseFloat(form.weight.value),
            height = parseFloat(form.height.value),
            result = 0;

        result = BMIService.getIndex(weight, height);

        BMIController.showResult(result);
    }

    static showResult(result) {
        const spanResult = document.querySelector('.result');
        spanResult.innerHTML = result.toFixed(2);
    }
}