const Etapa = require('../models/etapa');

const getEtapas = async(req, res) =>{
    try {
        const etapas = await Etapa.find();
        return res.status(200).json(etapas);

    } catch (error) {
        return res.status(500).json({msg: "Internal server error: ", error });
    }
};

const createEtapa = async(req, res) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        
        const etapaDb = await Etapa.findOne({nombre});//select * from clientes where email=?
        
        if(etapaDb){
            return res.status(400).json({msg: 'Ya existe la etapa'});
        }
        const data = {
            nombre  // nombre: nombre
        };
        const etapa = new Etapa(data);
        console.log(etapa);
        await etapa.save();
        return res.status(201).json(etapa);
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        });
    }
};

const updateEtapa = async(req, res) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const etapa = await Etapa.findByIdAndUpdate(id, data, {new: true})
        return res.json(etapa);
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
};

module.exports = {
    getEtapas,
    createEtapa,
    updateEtapa,
}