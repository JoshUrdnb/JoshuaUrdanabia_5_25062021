const dataApi = async (url) => {
    try {
        const response = await fetch(url);
        if (response.status === 200){
            return await response.json();
        }
        return null;
    } catch (probleme) {
        alert("Un problème est survenu, veuillez réessayer ultérieurement.");
    }
}
