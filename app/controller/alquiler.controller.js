import Alquiler from '../models/Alquiler.js';
import mongoose from 'mongoose';
import { response } from "express";

//get all
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

//6. Obtener los detalles del alquiler con el ID_Alquiler específico.
export const findAlquiler = async (req,res = response)=>{
	try {
		const {desde, hasta} = req.query;
		const [total, alquiler] = await Promise.all([
			Alquiler.countDocuments({_id: req.body.id}),
			Alquiler.findById(req.body.id).skip(Number(desde)).limit(Number(hasta)),
		])
		res.status(200).json({total, alquiler})
	} catch (error) {
		console.error(error, " Falla en findAlquiler");
	}
}

//9. Obtener el costo total de un alquiler específico.
export const cosotoTotal = async (req,res = response)=>{
	try {
		const [total, alquiler] = await Promise.all([
			Alquiler.countDocuments({_id: req.body.id}),
			Alquiler.aggregate([
				{
				  $match: {
					_id: new mongoose.Types.ObjectId(req.body.id)
				  }
				},
				{
				  $project: {
					"costo_total": 1
				  }
				}
			  ])
		])
		res.status(200).json({total, alquiler})
	} catch (error) {
		console.error(error, " Falla en cosotoTotal");
	}
}

//12. Obtener los detalles del alquiler que tiene fecha de inicio en '2023-07-05'.
export const fechaEspecifica = async (req,res = response)=>{
	try {
		const {desde, hasta} = req.query;
		const query = {fecha_inicio: '2023-07-05'}
		const [total, alquiler] = await Promise.all([
			Alquiler.countDocuments(query),
			Alquiler.find(query).skip(Number(desde)).limit(Number(hasta)),
		])
		res.status(200).json({total, alquiler})
	} catch (error) {
		console.error(error, " Falla en findAlquiler");
	}
}

//18. Obtener la cantidad total de alquileres registrados en la base de datos.
export const cantidadAlquiler = async (req,res = response)=>{
	try {
		const [total] = await Promise.all([
			Alquiler.countDocuments(),
		])
		res.status(200).json({cantidad_Alquileres: total})
	} catch (error) {
		console.error(error, " Falla en cantidadAlquiler");
	}
}

//21. Listar los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10'.
export const entreFechas = async (req,res = response)=>{
	try {
		const {desde, hasta} = req.query;
		const query = {fecha_inicio: {$gte: '2023-07-05', $lte: '2023-07-10'}}
		const [total, alquiler] = await Promise.all([
			Alquiler.countDocuments(query),
			Alquiler.find(query).skip(Number(desde)).populate('id_cliente').populate('id_automovil').limit(Number(hasta)),
		])
		res.status(200).json({total, alquiler})
	} catch (error) {
		console.error(error, " Falla en entreFechas");
	}
}

//post =>  realizar alquileres
export const postAlquileres = async (req,res)=>{
	try {
		const {id_automovil} = req.body;
		const existeAlquiler = await Alquiler.findOne({id_automovil: id_automovil});
		if(existeAlquiler)
			return res.status(400).json({msg: `El automovil ${ existeAlquiler.id_automovil }, ya esta alquilado`});
		const data = new Alquiler(req.body);
		await data.save();
		res.status(201).json(data);
	} catch (error) {
		console.error(error, " Falla en postAlquileres");
	}
}