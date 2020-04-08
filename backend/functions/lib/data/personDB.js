"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseDB_1 = require("./baseDB");
class PersonDB extends baseDB_1.BaseDB {
    constructor() {
        super(...arguments);
        this.personsCollection = 'persons';
    }
    async insertNewPerson(person) {
        try {
            const searchPerson = await this.db.collection(this.personsCollection)
                .where('cpf', '==', person.getCPF())
                .get();
            if (searchPerson.empty) {
                await this.db.collection(this.personsCollection)
                    .doc(person.getCPF())
                    .set({
                    name: person.getName(),
                    age: person.getAge(),
                    civilStatus: person.getCivilStatus(),
                    cpf: person.getCPF(),
                    city: person.getCity(),
                    state: person.getState()
                });
                return true;
            }
            else {
                return false;
            }
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async getPersons() {
        try {
            const result = await this.db.collection(this.personsCollection)
                .orderBy('name')
                .get();
            return result.docs.map((doc) => {
                return doc.data();
            });
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async deletePersonByCpf(cpf) {
        try {
            await this.db.collection(this.personsCollection)
                .doc(cpf)
                .delete();
        }
        catch (err) {
            throw new Error(err);
        }
    }
    async updatePersonByCpf(cpf, person) {
        try {
            await this.db.collection(this.personsCollection)
                .doc(cpf)
                .update({
                name: person.getName(),
                age: person.getAge(),
                civilStatus: person.getCivilStatus(),
                cpf: person.getCPF(),
                city: person.getCity(),
                state: person.getState()
            });
        }
        catch (err) {
            throw new Error(err);
        }
    }
}
exports.PersonDB = PersonDB;
//# sourceMappingURL=personDB.js.map