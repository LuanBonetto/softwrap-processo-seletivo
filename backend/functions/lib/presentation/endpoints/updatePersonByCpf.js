"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updatePersonByCpfUC_1 = require("../../business/usecase/updatePersonByCpfUC");
const personDB_1 = require("../../data/personDB");
exports.updatePersonByCpfEndpoint = async (req, res) => {
    try {
        const updatePersonByCpfUC = new updatePersonByCpfUC_1.UpdatePersonByCpfUC(new personDB_1.PersonDB());
        const result = await updatePersonByCpfUC.execute({
            cpf: req.params.cpf,
            name: req.body.name,
            age: req.body.age,
            civilStatus: req.body.civilStatus,
            city: req.body.city,
            state: req.body.state
        });
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};
//# sourceMappingURL=updatePersonByCpf.js.map