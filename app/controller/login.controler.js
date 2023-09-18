import { response } from "express";
import Empleado from "../models/Empleado.js";
import generateJWT from '../helpers/generate.jwt.js';

const login = async (req,res=response)=>{
    const {nombre, DNI} = req.body;
    try {
        const empleado = await Empleado.findOne({nombre});
        if(!empleado)
            return res.status(400).json({message: 'Nombre no registrado'});

        if(!(DNI === empleado.DNI))
            return res.status(400).json({message: 'Contraseña Incorrecta'});
        
        const token = await generateJWT(empleado.id)
        res.cookie("tokenX",token)
        res.json({empleado,token});
    } catch (error) {
        console.log(error);
        return res.json({message:"Auto contactarme (Servicio tecnico)"})
    }
}
export default login