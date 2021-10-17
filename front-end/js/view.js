const afficherCartesCamera = (camera) => {
    console.log('view', camera);

    document.getElementById('main').innerHTML += `
        <article class="camArticle">
            <img class="camImg" src="${camera.imageUrl}">
                <div class="cardContent">
                    <h3 class="camName">${camera.name}</h3>
                    <p class="camDescription">${camera.description}</p>
                    <p class="camPrice">${camera.price}</p>
                    <a href="html/products.html" class="productBtn">Plus d'infos</a>
                </div>
        </article>
    `
}
