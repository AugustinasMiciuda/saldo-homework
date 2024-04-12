//import { expect } from '@wdio/globals'
import currencyTablesPage from '../pageobjects/currencyTablesPage.ts';
import { eurCurrencyToUsdData, eurCurrencyToGBPData } from '../testData/historicCurrencyTestData.ts';

describe('Historic currency values', () => {
    const testDataUSD = eurCurrencyToUsdData;
    const testDataGBP = eurCurrencyToGBPData;

    beforeEach(async () => {
        await currencyTablesPage.open();
        await browser.setWindowSize(1920, 1080);
        await currencyTablesPage.cookies.closeCookies();
    });

    it('should check currency conversion rate of USD and GBP per EUR for specific date', async () => {
        await currencyTablesPage.currencyAndDateForm.selectCurrency(testDataUSD.selectedCurrency);
        await currencyTablesPage.currencyAndDateForm.clickDateSelector();
        await currencyTablesPage.datePicker.selectDate(testDataUSD.date);
        await currencyTablesPage.currencyAndDateForm.clickConfirmButton();
        await currencyTablesPage.resultTable.expectCurrencyNameToBe(testDataUSD.currency, testDataUSD.currencyFullName);
        await currencyTablesPage.resultTable.expectCurrencyNameToBe(testDataGBP.currency, testDataGBP.currencyFullName);
        await currencyTablesPage.resultTable.expectUnitsPerCurrencyToBe(testDataUSD.currency, testDataUSD.unitsPerCurrency);
        await currencyTablesPage.resultTable.expectUnitsPerCurrencyToBe(testDataGBP.currency, testDataGBP.unitsPerCurrency);
    });
});
