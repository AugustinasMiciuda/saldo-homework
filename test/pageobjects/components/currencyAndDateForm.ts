import { Key } from 'webdriverio';
export class CurrencyAndDateForm {
    private get currencyInputDropdown() {
        return $('input[aria-owns="currency-listbox"]');
    }
    private get datePickerInput() {
        return $('input[placeholder="YYYY-M-D"]');
    }
    private get selectedCurrencyElement() {
        return $('#currency-descriptiveText');
    }

    private get confirmBtn() {
        return $('button[type="submit"]');
    }

    async selectCurrency(currency: string) {
        await this.currencyInputDropdown.click();
        await this.currencyInputDropdown.setValue(currency);
        await browser.keys(Key.Enter);
        await expect(this.selectedCurrencyElement).toHaveText(expect.stringContaining(currency));
    }

    async clickDateSelector() {
        await this.datePickerInput.click();
    }

    async clickConfirmButton() {
        await this.confirmBtn.click();
    }
}
