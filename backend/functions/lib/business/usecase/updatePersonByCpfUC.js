"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("../entities/person");
const cpfCheck_1 = require("../../utils/cpfCheck");
const badRequestError_1 = require("../errors/badRequestError");
class UpdatePersonByCpfUC {
    constructor(db) {
        this.db = db;
    }
    async execute(input) {
        try {
            const isValidCpf = new cpfCheck_1.CpfCeck();
            if (isValidCpf.validateCpf(input.cpf) === false) {
                throw new badRequestError_1.BadRequestError('O CPF é Inválido');
            }
            if (!input.name ||
                !input.age ||
                !input.civilStatus ||
                !input.cpf ||
                !input.city ||
                !input.state) {
                throw new badRequestError_1.BadRequestError('Está faltando preencher algum campo!');
            }
            const newPerson = new person_1.Person(input.name, input.age, input.civilStatus, input.cpf, input.city, input.state);
            await this.db.updatePersonByCpf(input.cpf, newPerson);
            return ({
                message: "Atualizado com sucesso"
            });
        }
        catch (err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            };
        }
    }
}
exports.UpdatePersonByCpfUC = UpdatePersonByCpfUC;
//# sourceMappingURL=updatePersonByCpfUC.js.map