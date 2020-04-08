"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getPersonsUC_1 = require("../../business/usecase/getPersonsUC");
const personDB_1 = require("../../data/personDB");
exports.getPersonsEndpoint = async (req, res) => {
    try {
        const getPersonsUC = new getPersonsUC_1.GetPersonsUC(new personDB_1.PersonDB());
        const result = await getPersonsUC.execute();
        res.status(200).send(result);
    }
    catch (err) {
        res.status(err.errorCode || 400).send({
            message: err.message
        });
    }
};
//# sourceMappingURL=getPersons.js.map