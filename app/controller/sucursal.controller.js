import Sucursal from "../models/Sucursal.js";
import { response } from "express";

//get all
export const allSucursales = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, sucursales] = await Promise.all([
			Sucursal.countDocuments(),
			Sucursal.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, sucursales });
	} catch (error) {
		console.error(error, " Falla en allSucursales");
	}
};