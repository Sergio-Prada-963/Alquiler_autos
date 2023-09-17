import { Schema, model } from "mongoose";

const alquilerSchema = Schema({
	id_cliente: {
		type: Schema.Types.ObjectId,
		ref: "clientes",
		required: true,
		trim: true,
	},
	id_automovil: {
		type: Schema.Types.ObjectId,
		ref: "automoviles",
		required: true,
		trim: true,
	},
	fecha_inicio: {
		type: Date,
		require: true,
		trim: true,
	},
	fecha_fin: {
		type: Date,
		require: true,
		trim: true,
	},
	costo_total: {
		type: Number,
		require: true,
		trim: true,
	},
	estado: {
		type: Boolean,
		default: true,
		require: true,
		trim: true,
	},
});

const Alquiler = model("alquileres", alquilerSchema);
export default Alquiler;