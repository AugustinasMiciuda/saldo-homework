export type DateFormat = {
    year: number;
    month: number;
    day: number;
};
export type HistoricCurrencyData = {
    selectedCurrency: string;
    date: DateFormat;
    currency: string;
    currencyFullName: string;
    unitsPerCurrency: string;
    currencyPerUnits: string;
};

export const eurCurrencyToUsdData: HistoricCurrencyData = {
    selectedCurrency: 'Eur',
    date: { year: 2023, month: 2, day: 1 },
    currency: 'USD',
    currencyFullName: 'US Dollar',
    unitsPerCurrency: '1.0918121631244302',
    currencyPerUnits: '0.9159084628058255',
};
export const eurCurrencyToGBPData: HistoricCurrencyData = {
    selectedCurrency: 'Eur',
    date: { year: 2023, month: 2, day: 1 },
    currency: 'GBP',
    currencyFullName: 'British Pound',
    unitsPerCurrency: '0.8871386636267415',
    currencyPerUnits: '1.1272194990486224',
};
