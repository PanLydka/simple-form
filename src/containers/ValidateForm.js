import validator from 'validator';

export class ValidateForm {
    constructor(validations) {
        this.validations = validations;

        this.type = {
            text: "isAlpha",
            email: "isEmail",
            date: "isISO8601"

        }
    }

    validate() {
        let result = true;

        this.validations.forEach(element => {
            const method = element.type;
            const value = element.value;

            const extra = method === "text" ? 'pl-PL' : undefined;

            if (!validator[this.type[method]](value,extra))
                result = false;;
        });

        return result;
    }
}