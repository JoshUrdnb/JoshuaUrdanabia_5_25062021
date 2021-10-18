const dataApi = async (url) => {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (probleme) {
        alert("Un problème est survenu, veuillez réessayer ultérieurement.");
    }
}