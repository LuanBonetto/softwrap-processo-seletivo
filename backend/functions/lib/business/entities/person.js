"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(name, age, civilStatus, cpf, city, state) {
        this.name = name;
        this.age = age;
        this.civilStatus = civilStatus;
        this.cpf = cpf;
        this.city = city;
        this.state = state;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getCivilStatus() {
        return this.civilStatus;
    }
    getCPF() {
        return this.cpf;
    }
    getCity() {
        return this.city;
    }
    getState() {
        return this.state;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map