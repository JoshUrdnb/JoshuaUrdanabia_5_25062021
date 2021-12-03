const main = () => {
    // Recuperer les donnees du panier :
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    // Afficher les produits du panier :
    panier.forEach((produit) => {
        afficherLigneDuPanier(produit);
    });
}

main();