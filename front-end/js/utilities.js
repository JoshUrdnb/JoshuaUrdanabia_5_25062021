const formatToCurrency = (price, money, country) => {
    return new Intl.NumberFormat(country, {
        style: 'currency',
        currency: money,
    }).format(price / 100);
}