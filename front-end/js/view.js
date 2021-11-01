// Afficher les cartes des appareils photos :
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

// Afficher l'appareil photo selectionne :
const afficherProduct = (camera) => {
    document.getElementById('products').innerHTML += `
     <article class="camDetails">

        <img class="camImg" src="${camera.imageUrl}">

            <div class="cardContent">
                <h3 class="camName">${camera.name}</h3>
                <p class="camDescription">${camera.description}</p>
            </div>

            <form class="formLenses" >
                <label for="lensesSelect">Votre configuration</label>

                    <select name="lenses" id="lensesSelect">
                        <option value="lense0">---</option>
                        <option value="lense1">5mm 1.4</option>
                        <option value="lense2">50mm 1.6</option>
                    </select>
            </form>

            <div class="camPrice">${formatToCurrency(camera.price, 'EUR', 'fr-FR')}</div>
                <a href="cart.html" class="orderBtn">Ajouter au panier</a>
            </main>
    </article>
`
}
