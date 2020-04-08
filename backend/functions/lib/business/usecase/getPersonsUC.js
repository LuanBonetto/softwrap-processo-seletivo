"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class GetPersonsUC {
    constructor(db) {
        this.db = db;
    }
    async execute() {
        try {
            return await this.db.getPersons();
        }
        catch (err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            };
        }
    }
}
exports.GetPersonsUC = GetPersonsUC;
//# sourceMappingURL=getPersonsUC.js.map