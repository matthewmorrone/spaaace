
let parameters = {
	p: function() {
		return
	},
	w: 100,
	h: 100,
	generate: galactify()
}

let gui = new dat.GUI()
// let sceneControl = gui.addFolder('Scene')
// sceneControl.addColor(scene, "background").listen()

gui.add(parameters, 'p');
gui.add(parameters, 'w');
gui.add(parameters, 'h');
gui.add(generate, 'generate');







let options = {
	regenerate: function() {
		$(renderer.domElement).remove()
		clear()
		galactify()
		$('canvas').eq(0).remove()
	},
	reset: function() {
		camera.position.x = 0;
		camera.position.y = 150;
		camera.position.z = 0;
	},
	axis: function() {
		galaxis.visible = !galaxis.visible
		controls.update()
		renderer.render(scene, camera)
	}
}
if (!gui) {
	// gui = datgui(options, controls, camera, galaxy)
}



function datgui(options, controls, camera, galaxy) {




	let gui = new dat.GUI()
	// let sceneControl = gui.addFolder('Scene')
	// sceneControl.addColor(scene, "background").listen()

	gui.add(options, 'regenerate');


	gui.add()


	// let galaxyControl = gui.addFolder('Galaxy')
	// let galaxyPosition = galaxyControl.addFolder('Position')
	// galaxyPosition.add(galaxy.position, 'x').listen();
	// galaxyPosition.add(galaxy.position, 'y').listen();
	// galaxyPosition.add(galaxy.position, 'z').listen();
	// let galaxyRotation = galaxyControl.addFolder('Rotation')
	// galaxyRotation.add(galaxy.rotation, 'x', -5, 5)
	// galaxyRotation.add(galaxy.rotation, 'y', -5, 5)
	// galaxyRotation.add(galaxy.rotation, 'z', -5, 5)

	// let cameraControl = gui.addFolder('Camera')
	// cameraControl.add(camera, 'near').listen()
	// cameraControl.add(camera, 'far').listen()
	// cameraControl.add(camera, 'fov').listen()
	// cameraControl.add(camera, 'aspect').listen()
	// cameraControl.add(camera, 'castShadow').listen()
	// let cameraPosition = cameraControl.addFolder('Position')
	// cameraPosition.add(camera.position, 'x', -500, 500).listen();
	// cameraPosition.add(camera.position, 'y', -500, 500).listen();
	// cameraPosition.add(camera.position, 'z', -500, 500).listen();
	// let cameraRotation = cameraControl.addFolder('Rotation')
	// cameraRotation.add(camera.rotation, 'x', -500, 500).listen();
	// cameraRotation.add(camera.rotation, 'y', -500, 500).listen();
	// cameraRotation.add(camera.rotation, 'z', -500, 500).listen();






	// let orbit = gui.addFolder('Orbit')
	// orbit.add(controls, "enabled").listen()
	// orbit.add(controls, "enableKeys").listen()
	// orbit.add(controls, "enableContextMenu").listen()
	// orbit.add(controls, "enableDamping").listen()
	// orbit.add(controls, "dampingFactor").listen()

	// let rotate = orbit.addFolder('Rotate')
	// rotate.add(controls, "autoRotate").listen()
	// rotate.add(controls, "autoRotateSpeed").listen()
	// rotate.add(controls, "enableRotate").listen()
	// rotate.add(controls, "rotateSpeed").listen()

	// let pan = orbit.addFolder('Pan')
	// pan.add(controls, "enablePan").listen()
	// pan.add(controls, "keyPanSpeed").listen()

	// let distance = orbit.addFolder('Zoom/Distance')
	// distance.add(controls, "enableZoom").listen()
	// distance.add(controls, "zoomSpeed").listen()
	// distance.add(controls, "minDistance").listen()
	// distance.add(controls, "maxDistance").listen()


	// let size = gui.addFolder('Size')
	// size.add(galaxy.scale, 'x').name('Width').listen();
	// size.add(galaxy.scale, 'y').name('Height').listen();
	// size.add(galaxy.scale, 'z').name('Length').listen();


	gui.add(options, 'reset');
	gui.add(options, 'axis');



	return gui
}