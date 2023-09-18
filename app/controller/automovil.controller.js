import Automovil from "../models/Automovil.js";
import { response } from "express";

//get all
export const allAutomoviles = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, autos] = await Promise.all([
			Automovil.countDocuments(),
			Automovil.find().skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, autos });
	} catch (error) {
		console.error(error, " Falla en allAutomoviles");
	}
};

//11. Mostrar todos los automóviles con una capacidad mayor a 5 personas.
export const capacidad5 = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const query = {capacidad :{$gt: 5}}
		const [total, autos] = await Promise.all([
			Automovil.countDocuments(query),
			Automovil.find(query).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, autos });
	} catch (error) {
		console.error(error, " Falla en capacidad5");
	}
};

//16. Listar todos los automóviles ordenados por marca y modelo.
export const autosOrdenados = async (req, res = response) => {
	try {
		const { desde, hasta } = req.query;
		const [total, autos] = await Promise.all([
			Automovil.countDocuments(),
			Automovil.find().sort({"marca":1,"modelo":1}).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, autos });
	} catch (error) {
		console.error(error, " Falla en autosOrdenados");
	}
};
