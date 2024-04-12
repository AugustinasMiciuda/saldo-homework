export class ResultCurrencyTable {
    private get resultsTable() {
        return $('#table-section tbody');
    }

    columnIndex = {
        name: 0,
        unitsPerCurrency: 1,
        currencyPerUnit: 2,
    };

    private async getRowByCurrencyHeaderColumn(currency: string) {
        return (await this.resultsTable.$(`th=${currency.toUpperCase()}`)).$('..');
    }
    private async getColumnByColumnIndex(row: WebdriverIO.Element, index: number) {
        return row.$$('td')[index];
    }

    async expectUnitsPerCurrencyToBe(currency: string, expectedValue: string) {
        const row = await this.getRowByCurrencyHeaderColumn(currency);
        const column = await this.getColumnByColumnIndex(row, this.columnIndex.unitsPerCurrency);
        await expect(column).toHaveText(expectedValue);
    }
    async expectCurrencyNameToBe(currency: string, expectedValue: string) {
        const row = await this.getRowByCurrencyHeaderColumn(currency);
        const column = await this.getColumnByColumnIndex(row, this.columnIndex.name);
        await expect(column).toHaveText(expectedValue);
    }
}
