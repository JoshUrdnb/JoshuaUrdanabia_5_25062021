// Afficher les prix avec les centimes dans une devise precise :
const formatToCurrency = (price, money, country) => {
    return new Intl.NumberFormat(country, {
        style: 'currency',
        currency: money,
    }).format(price / 100);
}