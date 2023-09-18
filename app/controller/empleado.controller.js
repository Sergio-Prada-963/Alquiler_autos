import Empleado from "../models/Empleado.js";
import { response } from "express";

//get all
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

//7. Listar los empleados con el cargo de "Vendedor"
export const empleadoVendedor = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {cargo: "Vendedor"}
		const [total, empleado] = await Promise.all([
			Empleado.countDocuments(query),
			Empleado.find(query).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, empleado });
	} catch (error) {
		console.error(error, " Falla en empleadoVendedor");
	}
};

//14. Mostrar los empleados con cargo de "Gerente" o "Asistente".
export const empleadoGerenAsis = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {cargo: { $in: ['Gerente', 'Asistente'] }}
		const [total, empleado] = await Promise.all([
			Empleado.countDocuments(query),
			Empleado.find(query).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, empleado });
	} catch (error) {
		console.error(error, " Falla en empleadoVendedor");
	}
};