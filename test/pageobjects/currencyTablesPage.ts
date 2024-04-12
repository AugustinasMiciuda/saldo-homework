import { CurrencyAndDateForm } from './components/currencyAndDateForm.ts';
import { DatePickerComponent } from './components/datePickerComponent.ts';
import { ResultCurrencyTable } from './components/resultCurrencyTable.ts';
import Page from './page.ts';

class CurrencyTablesPage extends Page {
    currencyAndDateForm: CurrencyAndDateForm;
    datePicker: DatePickerComponent;
    resultTable: ResultCurrencyTable;

    constructor() {
        super();
        this.currencyAndDateForm = new CurrencyAndDateForm();
        this.datePicker = new DatePickerComponent();
        this.resultTable = new ResultCurrencyTable();
    }

    public open() {
        return super.open('currencytables');
    }
}

export default new CurrencyTablesPage();
