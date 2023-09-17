import mongoose from 'mongoose';
const coneccionDb = async ()=>{
    try {
        const conexion = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`coneccion online ${conexion.connection.host}... y en el puerto ${conexion.connection.port} :v`);
    } catch (error) {
        console.error(error, " falla en la conexion a la DB");
    }
}
export default coneccionDb;