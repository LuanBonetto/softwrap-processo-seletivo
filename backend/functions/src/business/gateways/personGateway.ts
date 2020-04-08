import { Person } from "../entities/person";

export interface PersonGateway{
    insertNewPerson(person:Person):Promise<boolean>
    getPersons(): Promise<object>
    deletePersonByCpf(cpf:string): Promise<void>
    updatePersonByCpf(cpf:string, person:Person): Promise<void>
}