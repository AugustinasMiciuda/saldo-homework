import currencyTablesPage from '../pageobjects/currencyTablesPage.ts';

describe('Historic currency values', () => {
    const todaysDay = new Date().getDate();

    beforeEach(async () => {
        await currencyTablesPage.open();
        await currencyTablesPage.cookies.closeCookies();
    });

    it('should check that todays date is not selectable', async () => {
        await currencyTablesPage.currencyAndDateForm.clickDateSelector();
        await currencyTablesPage.datePicker.expectDateToBeNotSelectable({ day: todaysDay });
    });
});
