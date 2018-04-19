
let solarSystem = {
	stars: [{
		name: "Sun", //names.splice(Math.floor(Math.random() * names.length), 1)[0];
		image: 'sunmap.jpg', // images.splice(images.indexOf(star.image), 1);
		radius: randomize(20, 40),
		orbit: {
			radius: randomize(0, 10),
			angle: Math.PI,
			speed: .1,
			inclination: randomize(-30, 30)
		},
		spin: {
			speed: 0.005 + Math.random() * 0.01,
			degree: Math.random(),
			direction: 1,
			inclination: randomize(-30, 30)
		},

		planets: [{
			name: "Mercury",
			image: 'mercury.jpg'
		},{
			name: "Venus",
			image: 'venus.jpg'
		},{
			name: "Earth",
			image: 'earth.jpg', //images.splice(Math.floor(Math.random() * images.length), 1)[0];
			moons: [{
				name: "Moon",
				image: "moon.jpg"
			}]
		},{
			name: "Mars",
			image: 'mars.jpg'
		},{
			name: "Jupiter",
			image: 'jupiter.jpg',
			moons: [{
				name: "Io",
				image: "io.jpg"
			},{
				name: "Europa",
				image: "europa.jpg"
			},{
				name: "Ganymede",
				image: "ganymede.jpg"
			},{
				name: "Callisto",
				image: "callisto.jpg"
			}]
		},{
			name: "Saturn",
			image: 'saturn.jpg',
			moons: [{
				name: "Titan",
				image: "titan.png"
			}],
			rings: true
		},{
			name: "Uranus",
			image: 'uranus.jpg'
		},{
			name: "Neptune",
			image: 'neptune.jpg'
		}]
	},{
		name: 'Nemesis',
		image: 'pulsar_diffuse.png'
	}]
}