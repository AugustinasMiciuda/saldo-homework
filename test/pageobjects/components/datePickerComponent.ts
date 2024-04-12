import { dateFormat } from '../../testData/historicCurrencyTestData';

export class DatePickerComponent {
    private get datePickerYearDropdown() {
        return $('[name="year"]');
    }
    private get datePickerMonthDropdown() {
        return $('[name="month"]');
    }
    private get datePickerDayElement() {
        return $('div.DayPicker-Body');
    }
    private get datePickerInputElement() {
        return $('.DayPickerInput input');
    }

    private async selectYear(year: number) {
        await this.datePickerYearDropdown.selectByVisibleText(`${year}`);
    }
    private async selectMonth(month: number) {
        await this.datePickerMonthDropdown.selectByAttribute('value', `${month - 1}`);
    }
    private getDayElement(day: number) {
        return this.datePickerDayElement.$(`div=${day}`);
    }
    async selectDate(date: dateFormat) {
        await this.selectYear(date.year);
        await this.selectMonth(date.month);
        await this.getDayElement(date.day).click();
        const paddedMonth = date.month.toString().padStart(2, '0');
        const paddedDay = date.day.toString().padStart(2, '0');
        const dateInputValue = await this.datePickerInputElement.getValue();
        await expect(dateInputValue).toBe(`${date.year}-${paddedMonth}-${paddedDay}`);
    }

    async expectDateToBeNotSelectable(date: { year?: number; month?: number; day: number }) {
        if (date.year) {
            await this.selectYear(date.year);
        }
        if (date.month) {
            await this.selectMonth(date.month);
        }
        const isDayElementDisabled = await this.getDayElement(date.day).getAttribute('aria-disabled');
        expect(isDayElementDisabled).toBe('true');
    }
}
