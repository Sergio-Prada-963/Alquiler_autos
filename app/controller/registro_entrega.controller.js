import Registro_entrega from "../models/Registro_entrega.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
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