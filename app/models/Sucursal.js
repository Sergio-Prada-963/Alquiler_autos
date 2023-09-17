import { Schema, model } from "mongoose";

const sucursalSchema = new Schema({
  nombre: {
    type: String,
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
});

const Sucursal = model("sucursales", sucursalSchema);
export default Sucursal;
