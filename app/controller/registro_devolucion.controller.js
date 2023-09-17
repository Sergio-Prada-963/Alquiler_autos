import Registro_devolucion from "../models/Registro_devolucion.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
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