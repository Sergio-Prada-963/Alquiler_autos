import Clientes from "../models/Cliente.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
export const allClientes = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, clientes] = await Promise.all([
			Clientes.countDocuments(),
			Clientes.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, clientes });
	} catch (error) {
		console.error(error, " Falla en allClientes");
	}
};