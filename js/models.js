// Models/material loading!
let mtlLoader = new THREE.MTLLoader();
mtlLoader.load("Models/PlayGround.mtl", function(materials){

    materials.preload();
    let objLoader = new THREE.OBJLoader();
    objLoader.setMaterials(materials);

    objLoader.load("Models/PlayGround.obj", function(mesh){

        mesh.traverse(function(node){
            if( node instanceof THREE.Mesh ){
                //node.castShadow = true;
                node.receiveShadow = true;
            }
        });

        scene.add(mesh);
        mesh.scale.set(width/1495,height/1460,1);
        mesh.rotation.x = -Math.PI/2;
        mesh.position.set(0.3,0,-7);
    });

});