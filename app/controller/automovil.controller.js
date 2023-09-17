import Automovil from "../models/Automovil.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
export const allAutomoviles = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, autos] = await Promise.all([
			Automovil.countDocuments(),
			Automovil.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, autos });
	} catch (error) {
		console.error(error, " Falla en allAutomoviles");
	}
};