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
    console.log(produit);/*
   document.getElementById('panier').innerHTML += `
                                <table class="cart_list">

                                    <td class="cart_item_image"><img src="http://localhost:3000/images/vcam_2.jpg"
                                            alt=""></td>

                                    <tr class="cart_item_name cart_info_col">
                                        <th class="cart_item_title">Nom</th>
                                        <td class="cart_item_text" id="productName">Hirsch 400DTS</td>
                                    </tr>

                                    <tr class="cart_item_color cart_info_col">
                                        <th class="cart_item_title">Lentille</th>
                                        <td class="cart_item_text">24-60mm 2.8/4.5</td>
                                    </tr>

                                    <tr class="cart_item_quantity cart_info_col">
                                        <th class="cart_item_title">Quantité</th>
                                        <td class="cart_item_text">1</td>
                                    </tr>

                                    <tr class="cart_item_price cart_info_col">
                                        <th class="cart_item_title">Prix</th>
                                        <td class="cart_item_text" id="productPrice">3099,00€</td>
                                    </tr>

                                    <tr class="cart_item_total cart_info_col">
                                        <th class="cart_item_title">Total</th>
                                        <td class="cart_item_text">3099,00€</td>
                                    </tr>

                                </table>`;*/
        
}

/*
    if(panier.lenght > 0) { };
*/

// Afficher message d'erreur :
const afficherErreur = (message) => {
    document.getElementById("products").innerHTML = `
    <article class="camDetails">
    <p class="nullDetail">${message}</p>
    </article> `
}