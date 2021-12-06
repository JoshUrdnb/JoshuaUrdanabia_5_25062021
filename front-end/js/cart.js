const main = () => {
    // Recuperer les donnees du panier :
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    // Afficher les produits du panier :
    panier.forEach((produit) => {
        if (produit !== null) {
            afficherLigneDuPanier(produit);
        } else if (produit === null) {
            afficherPanierVide("Le panier est vide");
        }
    });
}

main();