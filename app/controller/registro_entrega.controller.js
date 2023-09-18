import Registro_entrega from "../models/Registro_entrega.js";
import { response } from "express";

//get all
export const allEntregas = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, entrega] = await Promise.all([
			Registro_entrega.countDocuments(),
			Registro_entrega.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, entrega });
	} catch (error) {
		console.error(error, " Falla en allEntregas");
	}
};

//post =>  llevar un registro detallado de cada entrega
export const postRegistroEntrega = async (req,res)=>{
	try {
		const {id_alquiler} = req.body;
		const existeEntrega = await Registro_entrega.findOne({id_alquiler: id_alquiler});
		if(existeEntrega)
			return res.status(400).json({msg: `El alquiler ${ existeEntrega.id_alquiler }, ya fue entregado`});
		const data = new Registro_entrega(req.body);
		await data.save();
		res.status(201).json(data);
	} catch (error) {
		console.error(error, " Falla en postRegistroEntrega");
	}
}