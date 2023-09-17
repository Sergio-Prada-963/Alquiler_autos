import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
	nombre: {
		type: String,
		required: true,
		trim: true,
	},
	apellido: {
		type: String,
		required: true,
		trim: true,
	},
	DNI: {
		type: Number,
		required: true,
		trim: true,
	},
	direccion: {
		type: String,
		required: true,
		trim: true,
	},
	telefono: {
		type: Number,
		require: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
});

const Cliente = model("clientes", clienteSchema);
export default Cliente;