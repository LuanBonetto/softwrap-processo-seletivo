"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deletePersonByCpfUC_1 = require("../../business/usecase/deletePersonByCpfUC");
const personDB_1 = require("../../data/personDB");
exports.deletePersonByCpfEndpoint = async (req, res) => {
    try {
        const deletePersonByCpfUC = new deletePersonByCpfUC_1.DeletePersonByCpfUC(new personDB_1.PersonDB());
        const response = await deletePersonByCpfUC.execute({
            cpf: req.params.cpf
        });
        res.status(200).send(response);
    }
    catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};
//# sourceMappingURL=deletePersonByCpf.js.map