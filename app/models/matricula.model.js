//Utilizamos module.export para exportar objetos para que puedan ser utilizados en otras clases
module.exports = (sequelize, Sequelize) => {
// usamos el sequelize.defina para "definir" el nombre de la entity en la BD, en este caso "cliente"
// Usamos type.Sequelize para definir el tipo de datos de cada atributo de la entidad 
    const Matricula = sequelize.define("matricula", {
        carnet: {
            type: Sequelize.STRING
        },
        estudiante: {
            type: Sequelize.STRING
        },
        mes: {
            type: Sequelize.STRING
        },
        semestre: {
            type: Sequelize.STRING
        },
        anio: {
            type: Sequelize.STRING
        },
        monto: {
            type: Sequelize.STRING
        },
        transaccion: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },


      
        
    });
 
    return Matricula;
};