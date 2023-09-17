import { Schema, model } from "mongoose";

const sucursal_automovilSchema = new Schema({
	id_sucursal: {
		type: Schema.Types.ObjectId,
		ref: "sucursales",
		required: true,
		trim: true,
	},
	id_automovil: {
		type: Schema.Types.ObjectId,
		ref: "automoviles",
		required: true,
		trim: true,
	},
	cantidad_disponible: {
		type: Number,
		required: true,
		trim: true,
		default: 1,
	},
});
sucursal_automovilSchema.methods.toJSON = function() {
    const { __v, estado, ...data  } = this.toObject();
    return data;
}

const Sucursal_automovil = model("sucursal_automovil", sucursal_automovilSchema, "sucursal_automovil");
export default Sucursal_automovil;