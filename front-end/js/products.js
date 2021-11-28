const products = () => {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    const productId = urlSearchParams.get('id');
    const getProduct = dataApi(`http://localhost:3000/api/cameras/${productId}`);
    //const getProduct2 = data('http://localhost:3000/api/cameras/' + productId);
    getProduct.then((product) => {
        console.log(product);
        localStorage.setItem('toto', 'Salut, toto');
        console.log(localStorage.getItem('toto'));
        if (product !== null) {
            afficherProduct(product);
        } else if (product === null) {
            afficherErreur("Le produit n'existe pas.");
        }
    })
}


products();