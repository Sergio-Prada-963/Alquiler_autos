import Reserva from "../models/Reserva.js";
import { response } from "express";

//get all
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

//13. Listar las reservas pendientes realizadas por un cliente específico.
export const reservaPendienteEspecifico = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {id_cliente: req.body.idCliente, estado: false}
		const [total, reservas] = await Promise.all([
			Reserva.countDocuments(query),
			Reserva.find(query).populate('id_cliente').populate('id_automovil').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, reservas });
	} catch (error) {
		console.error(error, " Falla en reservaPendienteEspecifico");
	}
};

//20. Obtener los datos del cliente que realizó la reserva
export const clienteReserva = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, reservas] = await Promise.all([
			Reserva.countDocuments(),
			Reserva.find().populate('id_cliente').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, reservas });
	} catch (error) {
		console.error(error, " Falla en clienteReserva");
	}
};

//post => reservas
export const postReservas = async (req,res)=>{
	try {
		const {id_automovil} = req.body;
		const existeReserva = await Reserva.findOne({id_automovil: id_automovil});
		if(existeReserva)
			return res.status(400).json({msg: `El automovil ${ existeReserva.id_automovil }, ya esta reservado`});
		const data = new Reserva(req.body);
		await data.save();
		res.status(201).json(data);
	} catch (error) {
		console.error(error, " Falla en postReservas");
	}
}