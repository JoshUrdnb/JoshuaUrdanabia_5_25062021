const afficherCartesCamera = (camera) => {
    console.log('view', camera);

    document.getElementById('main').innerHTML += `
        <article class="camArticle">
            <img class="camImg" src="${camera.imageUrl}">
                <div class="cardContent">
                    <h3 class="camName">${camera.name}</h3>
                    <p class="camDescription">${camera.description}</p>
                </div>
            <span class="camPrice">${formatToCurrency(camera.price, 'EUR', 'fr-FR')}</span>
            <a href="html/products.html?id=${camera._id}" class="productBtn">Détails du produit</a>
        </article>
    `
}