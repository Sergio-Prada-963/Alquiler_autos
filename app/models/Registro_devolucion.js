import { Schema, model } from "mongoose";

const registro_devolucionSchema = new Schema({
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
	fecha_devolucion: {
		type: Date,
		require: true,
		trim: true,
	},
	combustible_devuelto: {
		type: Number,
		require: true,
		trim: true,
	},
	kilometraje_devuelto: {
		type: Number,
		require: true,
		trim: true,
	},
	monto_adicional: {
		type: Number,
		require: true,
		trim: true,
	},
});
const Registro_devolucion = model("registro_devolucion", registro_devolucionSchema, "registro_devolucion");
export default Registro_devolucion;