"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("../entities/person");
const badRequestError_1 = require("../errors/badRequestError");
const cpfCheck_1 = require("../../utils/cpfCheck");
class InsertNewPersonUC {
    constructor(db) {
        this.db = db;
    }
    async execute(input) {
        try {
            if (!input.name ||
                !input.age ||
                !input.civilStatus ||
                !input.cpf ||
                !input.city ||
                !input.state) {
                throw new badRequestError_1.BadRequestError('Está faltando preencher algum campo!');
            }
            const isValidCpf = new cpfCheck_1.CpfCeck();
            if (isValidCpf.validateCpf(input.cpf) === false) {
                throw new badRequestError_1.BadRequestError('O CPF é Inválido');
            }
            const newPerson = new person_1.Person(input.name, input.age, input.civilStatus, input.cpf, input.city, input.state);
            const response = await this.db.insertNewPerson(newPerson);
            if (response === false) {
                throw new badRequestError_1.BadRequestError("Esse CPF já está cadastrado no sistema");
            }
            return ({
                message: "Inserção concluída"
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
exports.InsertNewPersonUC = InsertNewPersonUC;
//# sourceMappingURL=insertNewPersonUC.js.map