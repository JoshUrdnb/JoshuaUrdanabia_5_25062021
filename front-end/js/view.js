const afficherCartesCamera = (camera) => {
    console.log('view', camera);

    document.getElementById("main").innerHTML += `<img class="test" id="img" src="${camera.imageUrl}"/>`
    document.getElementById("main").innerHTML += `<div class="texter" id="text">${camera.name}</div>`
    document.getElementById("main").innerHTML += `<div id="text">${camera.description}</div>`
    document.getElementById("main").innerHTML += `<div id="text">${camera.price}</div>`
}

