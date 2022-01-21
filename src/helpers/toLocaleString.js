export const toLocaleStringHelper = (number, locale) => {
    const numberFormatter = new Intl.NumberFormat(locale);
    return numberFormatter.format(number);
};
