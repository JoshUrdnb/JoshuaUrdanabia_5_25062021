const afficherCartesCamera = (camera) => {
    console.log('view', camera);

    document.getElementById('main').innerHTML += `
    <a href="html/products.html">
        <article class="camArticle">
            <img class="camImg" src="${camera.imageUrl}">
            <h3 class="camName">${camera.name}</h3>
            <p class="camDescription">${camera.description}</p>
            <p class="camPrice">${camera.price}</p>
        </article>
    </a>
    `
}
