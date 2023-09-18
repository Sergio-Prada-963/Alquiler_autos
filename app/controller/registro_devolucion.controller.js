import Registro_devolucion from "../models/Registro_devolucion.js";
import { response } from "express";

//get all
export const allDevoluciones = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, devolucion] = await Promise.all([
			Registro_devolucion.countDocuments(),
			Registro_devolucion.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, devolucion });
	} catch (error) {
		console.error(error, " Falla en allDevoluciones");
	}
};

//post =>  llevar un registro detallado de cada entrega y devolucion de automoviles
export const postRegistroDevolucion = async (req,res)=>{
	try {
		const {id_alquiler} = req.body;
		const existeDevolucion = await Registro_devolucion.findOne({id_alquiler: id_alquiler});
		if(existeDevolucion)
			return res.status(400).json({msg: `El alquiler ${ existeDevolucion.id_alquiler }, ya fue devuelto`});
		const data = new Registro_devolucion(req.body);
		await data.save();
		res.status(201).json(data);
	} catch (error) {
		console.error(error, " Falla en postRegistroDevolucion");
	}
}