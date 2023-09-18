import { Schema, model } from "mongoose";

const reservaSchema = new Schema({
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
	fecha_reserva: {
		type: Date,
		require: true,
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
	estado: {
		type: Boolean,
		require: true,
		trim: true,
		default: true,
	},
});

const Reserva = model("reservas", reservaSchema);
export default Reserva;