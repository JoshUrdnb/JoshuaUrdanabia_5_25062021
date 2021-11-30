const products = () => {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    const productId = urlSearchParams.get('id');
    const getProduct = dataApi(`http://localhost:3000/api/cameras/${productId}`);
    //const getProduct2 = data('http://localhost:3000/api/cameras/' + productId);
    getProduct.then((product) => {
        console.log(product);

        localStorage.setItem('Zurss 50S', 'Zurss 50S');
        localStorage.setItem('Hirsch 400DTS', 'Hirsch 400DTS');
        localStorage.setItem('Franck JS 105', 'Franck JS 105');
        localStorage.setItem('Kuros TTS', 'Kuros TTS');
        localStorage.setItem('Katatone', 'Katatone');

        console.log(localStorage.getItem('panier'));

        if (product !== null) {
            afficherProduct(product);
        } else if (product === null) {
            afficherErreur("Le produit n'existe pas.");
        }
    })
}


products();