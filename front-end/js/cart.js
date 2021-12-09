const main = () => {
    // Recuperer les donnees du panier :
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    if (panier.length === 0) {
        console.log('panier vide');
        afficherPanierVide("Le panier est vide");
    } else if (panier.length !== 0) {
        // Afficher les produits du panier :
        panier.forEach((produit) => {
            console.log('panier plein');
            afficherLigneDuPanier(produit);
        });
    }
}

main();


/*
        if (produit !== null) {
            afficherPanierVide("Le panier est vide");
        }
*/