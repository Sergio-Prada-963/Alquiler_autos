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

//10. Listar los clientes con el DNI específico.
export const clienteDNI = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {DNI: req.body.DNI}
		const [total, clientes] = await Promise.all([
			Clientes.countDocuments(query),
			Clientes.find(query).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, clientes });
	} catch (error) {
		console.error(error, " Falla en clienteDNI");
	}
};

//15. Obtener los datos de los clientes que realizaron almenos un alquiler.
export const clienteAlquiler = async (req, res = response) => {
	try {
		const query = [
			{
			  $lookup: {
				from: 'alquileres',
				localField: '_id',
				foreignField: 'id_cliente',
				as: 'alquiler'
			  }
			},
			{
				$match: {
					'alquiler': {$ne:[]}
				}
			}
		  ]
		const [clientes] = await Promise.all([
			Clientes.aggregate(query)
		]);
		res.status(200).json({ total: clientes.length, clientes });
	} catch (error) {
		console.error(error, " Falla en clienteAlquiler");
	}
};

//post Clientes  => La aplicación permitirá a los empleados registrar nuevos clientes
export const postClientes = async (req,res)=>{
	try {
		const {nombre, DNI} = req.body;
		const existeCliente = await Clientes.findOne({$or:[{"nombre": nombre},{"DNI": DNI}]});
		console.log(existeCliente);
		if(existeCliente)
			return res.status(400).json({msg: `El cliente ${ existeCliente.nombre }, ya existe`});
		const data = new Clientes(req.body);
		await data.save();
		res.status(201).json(data);
	} catch (error) {
		console.error(error, " Falla en postClientes");
	}
}