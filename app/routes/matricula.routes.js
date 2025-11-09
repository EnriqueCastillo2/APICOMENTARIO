module.exports = app => {
    const matricula = require("../controllers/matricula.controller.js");
    var router = require("express").Router();
    // Create a new Client
    router.post("/create/", matricula.create);
    // Retrieve all Client
    router.get("/", matricula.findAll);
    // Retrieve all published Client
   
    
    app.use("/api/matricula", router);
};