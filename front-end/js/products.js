const products = () => {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    const productId = urlSearchParams.get('id');
    console.log(productId);

    if (productId === null) {
        afficherErreur("La page demandée n'existe pas.");
    }

    if (productId.length !== 24) {
        afficherErreur("Le produit n'existe pas.");
    }

    const getProduct = dataApi(`http://localhost:3000/api/cameras/${productId}`);
    //const getProduct2 = data('http://localhost:3000/api/cameras/' + productId);
    getProduct.then((product) => {
            afficherProduct(product);
    })
}

products();