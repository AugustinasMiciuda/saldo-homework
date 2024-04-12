import currencyTablesPage from '../pageobjects/currencyTablesPage.ts';

describe('Historic currency values', () => {
    const todaysDay = new Date().getDay();

    beforeEach(async () => {
        await currencyTablesPage.open();
        await browser.setWindowSize(1920, 1080);
        await currencyTablesPage.cookies.closeCookies();
    });

    it('should check that todays date is not selectable', async () => {
        await currencyTablesPage.currencyAndDateForm.selectCurrency('EUR');
        await currencyTablesPage.currencyAndDateForm.clickDateSelector();
        await currencyTablesPage.datePicker.expectDateToBeNotSelectable({ day: todaysDay });
    });
});
