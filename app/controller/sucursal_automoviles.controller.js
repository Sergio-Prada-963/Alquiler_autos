import Sucursal_automovil from '../models/Sucursal_automovil.js'
import {response} from 'express';

//3. Obtener todos los automóviles disponibles para alquiler.
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

//8. Mostrar la cantidad total de automóviles disponibles en cada sucursal.
export const cantidadDisponible = async (req,res = response)=>{
	try {
		const { desde, hasta } = req.query;
		const [total, carros] = await Promise.all([
			Sucursal_automovil.countDocuments(),
			Sucursal_automovil.find().populate('id_sucursal','nombre').populate('id_automovil','marca').skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, carros });
	} catch (error) {
		console.error(error, " Falla en cantidadDisponible");
	}
};

//17. Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.
export const cantidadDireccion = async (req,res = response)=>{
	try {
		const { desde, hasta } = req.query;
		const [total, carros] = await Promise.all([
			Sucursal_automovil.countDocuments(),
			Sucursal_automovil.find().populate({path: 'id_sucursal',select: '-_id -telefono'}).populate({path: 'id_automovil',select: 'marca -_id'}).skip(Number(desde)).limit(Number(hasta)),
		]);
		res.status(200).json({ total, carros });
	} catch (error) {
		console.error(error, " Falla en cantidadDireccion");
	}
};

//19. Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.
export const Cap5Disponible = async (req,res = response)=>{
	try {
		const query = [
			{
				$match:{
					"cantidad_disponible": {$gt: 0}
				}
			},
			{
				$lookup: {
				  from: 'automoviles',
				  localField: 'id_automovil',
				  foreignField: '_id',
				  as: 'automoviles'
				}
			  },
			  {
				$unwind: '$automoviles'
			  },
			  {
				$match:{
					"automoviles.capacidad": 5
				}
			  },
			  {
				$project: {
					'_id': 0,
				  'automoviles': 1,
				}
			  }
		]
		const [automovil] = await Promise.all([
			Sucursal_automovil.aggregate(query)
		])
		res.status(200).json({total: automovil.length, automovil})
	} catch (error) {
		console.error(error, " Falla en Cap5Disponible");
	}
}

// update  => administrar la disponibilidad de automóviles en cada sucursal
export const updateSucursalAuto = async(req,res)=>{
    try {
        const data = await Sucursal_automovil.findByIdAndUpdate({_id: req.params.id},req.body,{new:true});
		res.json(data)
    } catch (error) {
        console.error(error, " Falla en updateSucursalAuto");
    }
}