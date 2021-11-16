const products = () => {
    const queryString = window.location.search;
    const urlSearchParams = new URLSearchParams(queryString);
    const productId = urlSearchParams.get('id');
    console.log(productId);

    if (productId === null) {
        document.getElementById("products").innerHTML = `
        <article class="camDetails">
        <p class="nullDetail">Le produit n'existe pas.</p>
        </article> `}

    if (productId.length > 24) {
        document.getElementById("products").innerHTML = `
        <article class="camDetails">
        <p class="nullDetail">La page demandée n'existe pas.</p>
        </article> `}

    if (productId.length < 24) {
        document.getElementById("products").innerHTML = `
        <article class="camDetails">
        <p class="nullDetail">La page demandée n'existe pas.</p>
        </article> `}

    const getProduct = dataApi(`http://localhost:3000/api/cameras/${productId}`);
    //const getProduct2 = data('http://localhost:3000/api/cameras/' + productId);
    getProduct.then((product) => {

            afficherProduct(product);
    })
}

products();