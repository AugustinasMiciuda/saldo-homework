export class ResultCurrencyTable {
    private get resultsTable() {
        return $('#table-section tbody');
    }

    collumnIndex = {
        name: 0,
        unitsPerCurrency: 1,
        currencyPerUnit: 2,
    };

    private async getRowByCurrencyHeaderColumn(currency: string) {
        return await (await this.resultsTable.$(`th=${currency.toUpperCase()}`)).$('..');
    }
    private async getColumnByColumnIndex(row: WebdriverIO.Element, index: number) {
        return await row.$$('td')[index];
    }

    async expectUnitsPerCurrencyToBe(currency: string, expectedValue: string) {
        const row = await this.getRowByCurrencyHeaderColumn(currency);
        const column = await this.getColumnByColumnIndex(row, this.collumnIndex.unitsPerCurrency);
        await expect(column).toHaveText(expectedValue);
    }
    async expectCurrencyNameToBe(currency: string, expectedValue: string) {
        const row = await this.getRowByCurrencyHeaderColumn(currency);
        const column = await this.getColumnByColumnIndex(row, this.collumnIndex.name);
        await expect(column).toHaveText(expectedValue);
    }
}
