const main = () => {
    const cameras = dataApi('http://localhost:3000/api/cameras');
    cameras.then((toutesCameras) => {
        //console.log(toutesCameras);
        toutesCameras.forEach((camera) => {
            afficherCartesCamera(camera);
            //console.log(camera);
        });
    })
}

main();