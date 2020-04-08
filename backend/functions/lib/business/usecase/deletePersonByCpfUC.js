"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DeletePersonByCpfUC {
    constructor(db) {
        this.db = db;
    }
    async execute(input) {
        try {
            await this.db.deletePersonByCpf(input.cpf);
            return ({
                message: "Deletado com Sucesso"
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
exports.DeletePersonByCpfUC = DeletePersonByCpfUC;
//# sourceMappingURL=deletePersonByCpfUC.js.map