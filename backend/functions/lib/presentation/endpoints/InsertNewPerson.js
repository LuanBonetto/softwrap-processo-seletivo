"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const insertNewPersonUC_1 = require("../../business/usecase/insertNewPersonUC");
const personDB_1 = require("../../data/personDB");
exports.insertNewPersonEndpoint = async (req, res) => {
    try {
        const insertNewPersonUC = new insertNewPersonUC_1.InsertNewPersonUC(new personDB_1.PersonDB());
        const result = await insertNewPersonUC.execute({
            name: req.body.name,
            age: req.body.age,
            civilStatus: req.body.civilStatus,
            cpf: req.body.cpf,
            city: req.body.city,
            state: req.body.state
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.statusCode || 400).send({
            message: err.message
        });
    }
};
//# sourceMappingURL=InsertNewPerson.js.map