/*
main()

// ASYNC permet l'utilisation de await, va attendre la reponse avant de s'executer
async function main() {
    // Création de la variable avec les donnés de l'API
    const articles = await getArticles()
    // Fonction qui va permettre d'afficher les articles
    for (article of articles) {
        displayArticles(article) 
    }
}

function getArticles() {
    // Connexion à l'API
    return fetch("http://localhost:3000/api/cameras")
    // Fonction qui récupère les données JSON de l'API
    .then(function(response){
        return response.json()
    })
    // Récupère la valeur de response.json en variable articles
    .then(function(articles){
        return articles
    })
    // Crée une alerter dans le navigateur si il y à une erreur
    .catch(function(error){
        alert(error)
    })
}

// Créera mon article qui se trouve dans la boucle for de main
function displayArticles(article) {
    // Console.log me permet de vérifier la console du navigateur
    console.log(article);
    // IMAGE
    document.getElementById("main").innerHTML += `<img class="test" id="img" src="${article.imageUrl}"/>`
    document.getElementById("main").innerHTML += `<div class="texter" id="text">${article.name}</div>`
    document.getElementById("main").innerHTML += `<div id="text">${article.description}</div>`
    document.getElementById("main").innerHTML += `<div id="text">${article.price}</div>`
}

*/

const main = () => {
    const cameras = dataApi('http://localhost:3000/api/cameras');
    cameras.then((toutesCameras) => {
        toutesCameras.forEach((camera) => {
            afficherCartesCamera(camera);
        });
    })
}

main();