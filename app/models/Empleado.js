import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
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
	cargo: {
		type: String,
		require: true,
		trim: true,
	},
});

const Empleado = model("empleados", empleadoSchema);

export default Empleado;