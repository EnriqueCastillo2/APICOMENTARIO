// importamos db los modelos en este caso si tenemos uno o mas, se puede referenciar db."nombreModelo".   
const db = require("../models");
const Matricula = db.matricula;
const Op = db.Sequelize.Op;

// Create and Save a new Client
exports.create = (req, res) => {
    // Validamos que dentro del  request no venga vacio el nombre, de lo contrario returna error
    if (!req.body.estudiante) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    

    // Create a Client, definiendo una variable con la estructura del reques para luego solo ser enviada como parametro mas adelante. 
    const matricula = {
        carnet: req.body.carnet,
        estudiante: req.body.estudiante,
        mes: req.body.mes, 
        semestre: req.body.semestre,
        anio: req.body.anio,
        monto: req.body.monto,
        transaccion: req.body.transaccion, 
        status: req.body.status,
    };

    // Save a new Client into the database
    Matricula.create(matricula)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Coments."
            });
        });
};

// Retrieve all Client from the database.
exports.findAll = (req, res) => {
    const estudiante = req.query.estudiante;
    var condition = estudiante ? { nombre: { [Op.iLike]: `%${estudiante}%` } } : null;

    Matricula.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving matricula."
            });
        });
};

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;

//     Cliente.findByPk(id)
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Cliente with id=" + id
//             });
//         });
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
//     const id = req.params.id;

//     Cliente.update(req.body, {
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Cliente was updated successfully."
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Client with id=${id}. Maybe Client was not found or req.body is empty!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error updating Client with id=" + id
//             });
//         });
// };

// // Delete a Client with the specified id in the request
// exports.delete = (req, res) => {
//     const id = req.params.id;
//     // utilizamos el metodo destroy para eliminar el objeto mandamos la condicionante where id = parametro que recibimos 
//     Cliente.destroy({
//         where: { id: id }
//     })
//         .then(num => {
//             if (num == 1) {
//                 res.send({
//                     message: "Client was deleted successfully!"
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Client with id=${id}. El cliente no fue encontado!`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id
//             });
//         });
// };

// // Delete all Clients from the database.
// exports.deleteAll = (req, res) => {
//     Cliente.destroy({
//         where: {},
//         truncate: false
//     })
//         .then(nums => {
//             res.send({ message: `${nums} Clients were deleted successfully!` });
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all clients."
//             });
//         });
// };

// // find all active Client, basado en el atributo status vamos a buscar que solo los clientes activos
// exports.findAllStatus = (req, res) => {
//     Cliente.findAll({ where: { status: true } })
//         .then(data => {
//             res.send(data);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while retrieving Client."
//             });
//         }); 
// };