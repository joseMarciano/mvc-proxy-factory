class DateHelper {

    constructor() {
        throw new Error(`DateHelper cannot be instatiated`);
    }

    static textToDate(text) {
        if (!/\d{4}-\d{2}-\d{2}/.test(text)) {
            throw new Error(`Invalid input format text.... valid format * yyyy-mm-dd *`);
        }

        return new Date(...text.split('-')
            .map((item, index) => index === 1 ? item - 1 : item
            ));
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getYear()}`;
    }
}