// Afficher les cartes des appareils photos :
const afficherCartesCamera = (camera) => {
    //console.log('view', camera);

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
    let options = '';
    camera.lenses.forEach((lenses) => {
        options += `<option value="${lenses}">${lenses}</option>`;
    });
    document.getElementById('products').innerHTML += `
     <article class="camDetails">

        <img class="camImg" src="${camera.imageUrl}"</>

            <div class="cardContent">
                <h3 class="camName">${camera.name}</h3>
                <p class="camDescription">${camera.description}</p>
            </div>

            <form class="formLenses" id="formLenses">
                <label for="lensesSelect">Votre configuration</label>

                    <select id="lensesSelect" name="lensesSelect">
                        <option disabled hidden selected>-- Disponibilités --</option>
                        ${options}
                    </select>
            </form>

            <div class="camPrice">${formatToCurrency(camera.price, 'EUR', 'fr-FR')}</div>
            
            <a href="cart.html" class="orderBtn" type="submit" name="ajouter" id="ajouter">Ajouter au panier</a>
    </article> `;
    document.getElementById('ajouter').addEventListener('click', (event) => {
        event.preventDefault();
        //console.log(camera); 
        let panier = JSON.parse(localStorage.getItem('panier')) || [];
        panier.push(camera);
        localStorage.setItem('panier', JSON.stringify(panier));
        console.log(panier);
    })
}

// Recuperer les valeurs :
const afficherLigneDuPanier = (produit) => {
    console.log(produit);
}

/*const updatePanier = () => {
    if(panier.lenght > 0) {
        document.getElementById('panierId').innerHTML += `
            <ul id="cart_list">
                <li class="cart_item clearfix bgc-element">
                    <div class="cart_item_image"><img src="${camera.imageUrl}" alt=""></div>
                    <div
                        class="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                        <div class="cart_item_name cart_info_col">
                            <div class="cart_item_title">Nom</div>
                            <div class="cart_item_text" id="productName">${camera.name}</div>
                        </div>
                        <div class="cart_item_color cart_info_col">
                            <div class="cart_item_title">Lentille</div>
                            <div class="cart_item_text">24-60mm 2.8/4.5</div>
                        </div>
                        <div class="cart_item_quantity cart_info_col">
                            <div class="cart_item_title">Quantité</div>
                            <div class="cart_item_text">1</div>
                        </div>
                        <div class="cart_item_price cart_info_col">
                            <div class="cart_item_title">Prix</div>
                            <div class="cart_item_text" id="productPrice">${formatToCurrency(camera.price, 'EUR', 'fr-FR')}</div>
                        </div>
                        <div class="cart_item_total cart_info_col">
                            <div class="cart_item_title">Total</div>
                            <div class="cart_item_text">3099,00€</div>
                        </div>
                    </div>
                </li>
            </ul> `;
    };
}*/

// Afficher message d'erreur :
const afficherErreur = (message) => {
    document.getElementById("products").innerHTML = `
    <article class="camDetails">
    <p class="nullDetail">${message}</p>
    </article> `
}