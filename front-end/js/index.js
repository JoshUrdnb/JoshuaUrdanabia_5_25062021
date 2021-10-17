const main = () => {
    const cameras = dataApi('http://localhost:3000/api/cameras');
    cameras.then((toutesCameras) => {
        toutesCameras.forEach((camera) => {
            afficherCartesCamera(camera);
        });
    })
}

main();