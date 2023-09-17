import { Schema, model } from "mongoose";

const automovilSchema = new Schema({
	marca: {
		type: String,
		required: true,
		trim: true,
	},
	modelo: {
		type: String,
		required: true,
		trim: true,
	},
	año: {
		type: Number,
		require: true,
		trim: true,
	},
	tipo: {
		type: String,
		require: true,
		trim: true,
	},
	capacidad: {
		type: Number,
		require: true,
		trim: true,
	},
	precio_diario: {
		type: Number,
		require: true,
		trim: true,
	},
});
const Automovil = model("automoviles", automovilSchema);

export default Automovil;
