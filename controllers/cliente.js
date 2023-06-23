const Cliente = require('../models/cliente');

const getClientes = async(req, res) =>{
    try {
        const clientes = await Cliente.find();
        return res.status(200).json(clientes);

    } catch (error) {
        return res.status(500).json({msg: "Internal server error: ", error });
    }
};

const createCliente = async(req, res) => {
    try{
        const {nombre, email} = req.body;
        
        const clienteDB = await Cliente.findOne({email});//select * from clientes where email=?
        
        if(clienteDB){
            return res.status(400).json({msg: 'Ya existe el usuario'});
        }
        const data = {
            nombre,  // nombre: nombre
            email
        };
        const cliente = new Cliente(data);
        console.log(cliente);
        await cliente.save();
        return res.status(201).json(cliente);
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        });
    }
};

const updateCliente = async(req, res) => {
    try{
        console.log(req.body)
        console.log(req.params)
        const data = req.body
        const id = req.params.id
        data.fechaActualizacion = new Date()
        console.log(data)
        const cliente = await Cliente.findByIdAndUpdate(id, data, {new: true})
        return res.json(cliente);
    }catch(e){
        console.log(e)
        return res.status(500).json({msg: e})  
    }
};

module.exports = {
    getClientes,
    createCliente,
    updateCliente,
}