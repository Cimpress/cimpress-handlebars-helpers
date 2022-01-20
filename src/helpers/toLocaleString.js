export const toLocaleStringHelper = (number, locales) => {
    const numberFormatter = new Intl.NumberFormat(locales);
    return numberFormatter.format(number);
};
