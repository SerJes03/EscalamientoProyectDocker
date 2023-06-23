const Universidad = require('../models/universidad');

const getUniversidades = async(req, res) =>{
    try {
        const universidades = await Universidad.find();
        return res.status(200).json(universidades);

    } catch (error) {
        return res.status(500).json({msg: "Internal server error: ", error });
    }
};

const createUniversidad = async(req, res) => {
    try{
        const {nombre, direccion, telefono} = req.body;
        
        const universidadDB = await Universidad.findOne({nombre});//select * from clientes where email=?
        
        if(universidadDB){
            return res.status(400).json({msg: 'Ya existe la universidad'});
        }
        const data = {
            nombre,  // nombre: nombre
            direccion,
            telefono,
        };
        const universidad = new Universidad(data);
        console.log(universidad);
        await universidad.save();
        return res.status(201).json(universidad);
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        });
    }
};

const updateUniversidad = async(req, res) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const universidad = await Universidad.findByIdAndUpdate(id, data, {new: true})
        return res.json(universidad);
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
};

module.exports = {
    getUniversidades,
    createUniversidad,
    updateUniversidad,
}