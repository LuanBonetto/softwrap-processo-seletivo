import { BaseDB } from "./baseDB";
import { Person } from "../business/entities/person";
import { PersonGateway } from "../business/gateways/personGateway";

export class PersonDB extends BaseDB implements PersonGateway{

    private personsCollection = 'persons'

    public async insertNewPerson(person:Person):Promise<boolean>{
        try{

            const searchPerson = await this.db.collection(this.personsCollection)
            .where('cpf', '==', person.getCPF())
            .get()

            if(searchPerson.empty){

                await this.db.collection(this.personsCollection)
                .doc(person.getCPF())
                .set({
                    name: person.getName(),
                    age: person.getAge(),
                    civilStatus: person.getCivilStatus(),
                    cpf: person.getCPF(),
                    city: person.getCity(),
                    state: person.getState()
                })
                return true
        }else{
            return false
        }
            
        }catch(err){
            throw new Error(err)
        }
    }

    public async getPersons(): Promise<object>{
        try{
            const result = await this.db.collection(this.personsCollection)
            .orderBy('name')
            .get()
            return result.docs.map((doc) => {
                return doc.data()
            })
        }catch(err){
            throw new Error(err)
        }
    }

    public async deletePersonByCpf(cpf:string): Promise<void>{
        try{
            await this.db.collection(this.personsCollection)
            .doc(cpf)
            .delete()

        }catch(err){
            throw new Error(err)
        }
    }

    public async updatePersonByCpf(cpf:string, person:Person): Promise<void>{
        try{
            await this.db.collection(this.personsCollection)
            .doc(cpf)
            .update({
                name: person.getName(),
                age: person.getAge(),
                civilStatus: person.getCivilStatus(),
                cpf: person.getCPF(),
                city: person.getCity(),
                state: person.getState()
            })
        }catch(err){
            throw new Error(err)
        }
    }
}