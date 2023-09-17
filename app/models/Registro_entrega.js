import { Schema, model } from "mongoose";

const registro_entregaSchema = new Schema({
	id_alquiler: {
		type: Schema.Types.ObjectId,
		ref: "alquileres",
		required: true,
		trim: true,
	},
	id_empleado: {
		type: Schema.Types.ObjectId,
		ref: "empleados",
		required: true,
		trim: true,
	},
	fecha_entrega: {
		type: Date,
		require: true,
		trim: true,
	},
	combustible_entregado: {
		type: Number,
		require: true,
		trim: true,
	},
	kilometraje_entregado: {
		type: Number,
		require: true,
		trim: true,
	},
});
const Registro_entrega = model("registro_entrega", registro_entregaSchema, "registro_entrega");
export default Registro_entrega;