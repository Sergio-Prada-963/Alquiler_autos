import Alquiler from '../models/Alquiler.js';
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
export const allAlquiler = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, alquileres] = await Promise.all([
			Alquiler.countDocuments(),
			Alquiler.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, alquileres });
	} catch (error) {
		console.error(error, " Falla en allAlquiler");
	}
};

//4. Listar todos los alquileres activos junto con los datos de los clientes relacionados
export const alquilerActivo = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {estado: true}
		const [total, alquileres] = await Promise.all([
			Alquiler.countDocuments(query),
			Alquiler.find(query).populate('id_cliente').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, alquileres });
	} catch (error) {
		console.error(error, " Falla en alquilerActivo");
	}
};