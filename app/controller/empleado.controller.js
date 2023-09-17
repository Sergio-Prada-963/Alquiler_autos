import Empleado from "../models/Empleado.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
export const allEmpleados = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, empleado] = await Promise.all([
			Empleado.countDocuments(),
			Empleado.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, empleado });
	} catch (error) {
		console.error(error, " Falla en allEmpleados");
	}
};