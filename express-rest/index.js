const express    = require("express");
const cors       = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/api/products', function (req, res) {
	setTimeout(() => {
		res.send({
			status : 200,
			message: 'Your purchase was processed',
			data   : [
				{
					id    : 1,
					name  : "Amigo Comics. Alan Dracon nº 1. Cómic en inglés.",
					image : "https://www.milcomics.com/fotos/thumb/talan-dracon-1---comic-usa-vo-49841-1.png",
					price : 3.99,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 2,
					name  : "ALL STAR BATMAN AND ROBIN TPB VOL. 1. DC COMICS USA",
					image : "https://www.milcomics.com/fotos/thumb/tall-star-batman-and-robin-tpb-vol-1-dc-comics-usa-43321-1.png",
					price : 14.00,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 3,
					name  : "BAT LASH (2008) #1-6. DC COMICS USA. COMPLETA.",
					image : "https://www.milcomics.com/fotos/thumb/tbat-lash-2008-1-6-dc-comics-usa-completa-60049-1.png",
					price : 12.00,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 4,
					name  : "ACTION COMICS: 80 AÑOS DE SUPERMAN",
					image : "https://www.milcomics.com/fotos/thumb/taction-comics-80-anos-de-superman-71926-1.jpg",
					price : 32.78,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 5,
					name  : "ALL-STAR SUPERMAN",
					image : "https://www.milcomics.com/fotos/thumb/tall-star-superman-47159-1.png",
					price : 32.45,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 6,
					name  : "BATMAN / SUPERMAN 05: MALDAD ETERNA",
					image : "https://www.milcomics.com/fotos/thumb/tbatman-superman-05-maldad-eterna-60162-1.png",
					price : 2.38,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 7,
					name  : "BATMAN / SUPERMAN 11",
					image : "https://www.milcomics.com/fotos/thumb/tbatman-superman-11-60146-1.png",
					price : 2.99,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 8,
					name  : "BATMAN / SUPERMAN 12",
					image : "https://www.milcomics.com/fotos/thumb/tbatman-superman-12-60147-1.png",
					price : 2.99,
					detail: "No se ha proporcionado más información para este producto."
				},
				{
					id    : 9,
					name  : "BATMAN / SUPERMAN 13",
					image : "https://www.milcomics.com/fotos/thumb/tbatman-superman-13-61588-1.png",
					price : 2.99,
					detail: "No se ha proporcionado más información para este producto."
				},
			
			]
		});
	}, 2000);
});

app.post('/api/process', function (req, res) {
	
	console.log(req.body);
	// SETTIMEOUT is to simulate database and network time
	setTimeout(() => {
		res.send({
			status : 200,
			message: 'Your purchase was processed',
		});
	}, 2000);
	
});

app.listen(2000, () => {
	console.log("El servidor está inicializado en el puerto 2000");
});
