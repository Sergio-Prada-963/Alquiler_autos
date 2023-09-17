const { MongoClient } = require("mongodb");

//base de datos mongo
const url = "mongodb+srv://Alejandro:3691215@alquiler.ilqrtwp.mongodb.net/";
const client = new MongoClient(url);
const bdname = "alquilerAutos";

//Conexion
client.connect();
const db = client.db(bdname);
console.log("Conectado al la base de datos");

//sucursal_automovil
async function test_insert() {
	const autos = db.collection("automoviles");
	const sucursal = db.collection("sucursales");
	const sucu_auto = db.collection("sucursal_automovil");

	const automoviles = await autos.find().toArray();
	const sucursales = await sucursal.find().toArray();

	let cantidad = [2, 5, 1, 4, 7, 8, 1, 2, 6, 0, 4, 6, 0, 5, 5];

	for (let i = 0; i < cantidad.length; i++) {
		const posicion = Math.floor(Math.random() * 14);
		await sucu_auto.insertOne({
			id_sucursal: sucursales[posicion]._id,
			id_automovil: automoviles[i]._id,
			cantidad_disponible: cantidad[i],
		});
	}
	console.log("echo :)");
}
/* test_insert(); */

//reserva
async function test_reserva() {
	const reservas = db.collection("reservas");
	const clientes = db.collection("clientes");
	const automoviles = db.collection("automoviles");

	const data_automoviles = await automoviles.find().toArray();
	const data_clientes = await clientes.find().toArray();

	const Inicio = [
		"2023-11-01T00:00:00.000Z",
		"2023-08-24T00:00:00.000Z",
		"2023-06-25T00:00:00.000Z",
		"2023-04-19T00:00:00.000Z",
		"2023-03-14T00:00:00.000Z",
		"2023-05-12T00:00:00.000Z",
		"2023-06-04T00:00:00.000Z",
		"2023-02-01T00:00:00.000Z",
		"2023-04-27T00:00:00.000Z",
		"2023-10-25T00:00:00.000Z",
		"2023-01-02T00:00:00.000Z",
		"2023-04-20T00:00:00.000Z",
		"2023-06-12T00:00:00.000Z",
		"2023-08-19T00:00:00.000Z",
		"2023-10-14T00:00:00.000Z",
	];
	const Fecha_inicio = [
		"2023-11-10T00:00:00.000Z",
		"2023-09-04T00:00:00.000Z",
		"2023-07-03T00:00:00.000Z",
		"2023-05-08T00:00:00.000Z",
		"2023-03-29T00:00:00.000Z",
		"2023-05-24T00:00:00.000Z",
		"2023-06-16T00:00:00.000Z",
		"2023-02-20T00:00:00.000Z",
		"2023-05-13T00:00:00.000Z",
		"2023-11-08T00:00:00.000Z",
		"2023-01-15T00:00:00.000Z",
		"2023-04-28T00:00:00.000Z",
		"2023-06-19T00:00:00.000Z",
		"2023-08-28T00:00:00.000Z",
		"2023-10-27T00:00:00.000Z",
	];
	const Fecha_fin = [
		"2023-11-30T00:00:00.000Z",
		"2023-10-04T00:00:00.000Z",
		"2023-07-19T00:00:00.000Z",
		"2023-06-04T00:00:00.000Z",
		"2023-04-13T00:00:00.000Z",
		"2023-06-08T00:00:00.000Z",
		"2023-07-20T00:00:00.000Z",
		"2023-03-07T00:00:00.000Z",
		"2023-06-13T00:00:00.000Z",
		"2023-12-01T00:00:00.000Z",
		"2023-02-02T00:00:00.000Z",
		"2023-05-03T00:00:00.000Z",
		"2023-06-28T00:00:00.000Z",
		"2023-09-12T00:00:00.000Z",
		"2023-11-15T00:00:00.000Z",
	];

	for (let i = 0; i < Inicio.length; i++) {
		const condicion = Math.floor(Math.random() * 2);
		await reservas.insertOne({
			id_cliente: data_clientes[i]._id,
			id_automovil: data_automoviles[i]._id,
			fecha_reserva: new Date(Inicio[i]),
			fecha_inicio: new Date(Fecha_inicio[i]),
			fecha_fin: new Date(Fecha_fin[i]),
			estado: condicion === 0 ? false : true,
		});
	}
	console.log("echo :)");
}
/* test_reserva(); */

//alquiler
async function test_alquiler() {
	const alquiler = db.collection("alquileres");
	const clientes = db.collection("clientes");
	const automoviles = db.collection("automoviles");

	const data_automoviles = await automoviles.find().toArray();
	const data_clientes = await clientes.find().toArray();

	const inicio = [
		"2023-05-20T00:00:00.000Z",
		"2023-04-09T00:00:00.000Z",
		"2023-06-02T00:00:00.000Z",
		"2023-08-13T00:00:00.000Z",
		"2023-03-16T00:00:00.000Z",
		"2023-10-01T00:00:00.000Z",
		"2023-07-08T00:00:00.000Z",
		"2023-02-27T00:00:00.000Z",
		"2023-09-26T00:00:00.000Z",
		"2023-01-24T00:00:00.000Z",
		"2023-03-15T00:00:00.000Z",
		"2023-04-25T00:00:00.000Z",
		"2023-08-20T00:00:00.000Z",
		"2023-06-10T00:00:00.000Z",
		"2023-07-17T00:00:00.000Z",
	];
	const fin = [
		"2023-06-09T00:00:00.000Z",
		"2023-04-28T00:00:00.000Z",
		"2023-06-23T00:00:00.000Z",
		"2023-08-27T00:00:00.000Z",
		"2023-03-30T00:00:00.000Z",
		"2023-10-15T00:00:00.000Z",
		"2023-07-22T00:00:00.000Z",
		"2023-03-13T00:00:00.000Z",
		"2023-10-10T00:00:00.000Z",
		"2023-02-07T00:00:00.000Z",
		"2023-03-30T00:00:00.000Z",
		"2023-05-10T00:00:00.000Z",
		"2023-09-04T00:00:00.000Z",
		"2023-06-24T00:00:00.000Z",
		"2023-07-31T00:00:00.000Z",
	];

	for (let i = 0; i < inicio.length; i++) {
		const numeroAleatorio = Math.random() * (950 - 300) + 300;
		const price = parseFloat(numeroAleatorio.toFixed(1));
		const condicion = Math.floor(Math.random() * 2);
		await alquiler.insertOne({
			id_cliente: data_clientes[i]._id,
			id_automovil: data_automoviles[i]._id,
			fecha_inicio: new Date(inicio[i]),
			fecha_fin: new Date(fin[i]),
			costo_total: price,
			estado: condicion === 0 ? false : true,
		});
	}
	console.log("echo :)");
}
/* test_alquiler(); */

//registro devolucion
async function test_registro_devolucion() {
	const alquiler = db.collection("alquileres");
	const empleado = db.collection("empleados");
	const registro_devolucion = db.collection("registro_devolucion");

	const data_empleado = await empleado.find().toArray();
	const data_alquiler = await alquiler.find().toArray();

	const devolucion = [
		"2023-06-09T00:00:00.000Z",
		"2023-04-29T00:00:00.000Z",
		"2023-06-23T00:00:00.000Z",
		"2023-08-27T00:00:00.000Z",
		"2023-04-10T00:00:00.000Z",
		"2023-10-18T00:00:00.000Z",
		"2023-07-22T00:00:00.000Z",
		"2023-03-13T00:00:00.000Z",
		"2023-10-20T00:00:00.000Z",
		"2023-02-07T00:00:00.000Z",
		"2023-04-15T00:00:00.000Z",
		"2023-05-10T00:00:00.000Z",
		"2023-09-04T00:00:00.000Z",
		"2023-06-28T00:00:00.000Z",
		"2023-08-02T00:00:00.000Z",
	];

	for (let i = 0; i < devolucion.length; i++) {
		const numeroAleatorio = Math.random() * (0 - 10) + 10;
		const combust = parseFloat(numeroAleatorio.toFixed(1));
		const kiloAletorio = Math.floor(Math.random() * (200 - 1000) + 1000);
		const montoAleatorio = Math.random() * (50 - 900) + 900;
		const monto = parseFloat(montoAleatorio.toFixed(1));
		await registro_devolucion.insertOne({
			id_alquiler: data_alquiler[i]._id,
			id_empleado: data_empleado[i]._id,
			fecha_devolucion: new Date(devolucion[i]),
			combustible_devuelto: combust,
			kilometraje_devuelto: kiloAletorio,
			monto_adicional: monto,
		});
	}
	console.log("echo :)");
}
/* test_registro_devolucion(); */

//registro entrega
async function test_registro_entrega() {
	const alquiler = db.collection("alquileres");
	const empleado = db.collection("empleados");
	const registro_devolucion = db.collection("registro_entrega");

	const data_empleado = await empleado.find().toArray();
	const data_alquiler = await alquiler.find().toArray();

	const entrega = [
		"2023-06-09T00:00:00.000Z",
		"2023-04-28T00:00:00.000Z",
		"2023-06-23T00:00:00.000Z",
		"2023-08-27T00:00:00.000Z",
		"2023-03-30T00:00:00.000Z",
		"2023-10-18T00:00:00.000Z",
		"2023-07-22T00:00:00.000Z",
		"2023-03-16T00:00:00.000Z",
		"2023-10-10T00:00:00.000Z",
		"2023-02-08T00:00:00.000Z",
		"2023-03-30T00:00:00.000Z",
		"2023-05-10T00:00:00.000Z",
		"2023-09-04T00:00:00.000Z",
		"2023-06-24T00:00:00.000Z",
		"2023-07-31T00:00:00.000Z",
	];
	
	for (let i = 0; i < entrega.length; i++) {
		const numeroAleatorio = Math.random() * (0 - 10) + 10;
		const combust = parseFloat(numeroAleatorio.toFixed(1));
		const kiloAletorio = Math.floor(Math.random() * (200 - 350) + 350);
		await registro_devolucion.insertOne({
			id_alquiler: data_alquiler[i]._id,
			id_empleado: data_empleado[i]._id,
			fecha_entrega: new Date(entrega[i]),
			combustible_entregado: combust,
			kilometraje_entregado: kiloAletorio,
		});
	}
	console.log("echo :)");
}
test_registro_entrega(); 
