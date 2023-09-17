import Reserva from "../models/Reserva.js";
import { response } from "express";

//2. Mostrar todos los clientes registrados en la base de datos.
export const allReservas = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, reservas] = await Promise.all([
			Reserva.countDocuments(),
			Reserva.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, reservas });
	} catch (error) {
		console.error(error, " Falla en allReservas");
	}
};

//5. Mostrar todas las reservas pendientes con los datos del cliente y el auto móvil reservado.
export const reservaPendiente = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {estado: false}
		const [total, reservas] = await Promise.all([
			Reserva.countDocuments(query),
			Reserva.find(query).populate('id_cliente').populate('id_automovil').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, reservas });
	} catch (error) {
		console.error(error, " Falla en reservaPendiente");
	}
};