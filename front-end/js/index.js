const getCameras =  async function() {

    try {
        let response = await fetch('http://localhost:3000/api/cameras')
        if (response.ok) {
            let cameras = await response.json()
            console.log(cameras)

            for (let cam of cameras) {
                const camerasDiv = document.getElementById('cameras');
        
                const camerasSection = document.createElement('section');
                camerasDiv.appendChild(camerasSection);
                camerasSection.className = 'cam';

                const link = document.createElement("a");
                link.href = "product.html?id=" + cam._id;
                camerasSection.appendChild(link);
        
                const camImg = document.createElement('img');
                link.appendChild(camImg);
                camImg.setAttribute('src', cam.imageUrl);
            }
        } else {
            console.error('Retour du serveur : ', response.status)
        } 
    } catch (e) {
        console.log(e)
    }
}

getCameras();