import Sucursal_automovil from '../models/Sucursal_automovil.js'
import Sucursal from '../models/Sucursal.js'
import {response} from 'express';

//Obtener todos los automóviles disponibles para alquiler
export const carrosDisponibles = async (req,res = response)=>{
	try {
		const { desde, hasta } = req.query;
        const query = {cantidad_disponible: {$gte: 1}}
		const [total, carros] = await Promise.all([
			Sucursal_automovil.countDocuments(query),
			Sucursal_automovil.find(query).populate('id_automovil').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, carros });
	} catch (error) {
		console.error(error, " Falla en carrosDisponibles");
	}
};