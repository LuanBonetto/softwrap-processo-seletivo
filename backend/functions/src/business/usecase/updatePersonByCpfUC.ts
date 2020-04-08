import { PersonDB } from "../../data/personDB";
import { Person } from "../entities/person";

export class UpdatePersonByCpfUC {
    constructor(private db:PersonDB){}

    public async execute(input:UpdatePersonByCpfInput): Promise<UpdatePersonByCpfOutput>{
        
        const newPerson = new Person(
            input.name,
            input.age,
            input.civilStatus,
            input.cpf,
            input.city,
            input.state
        )

        await this.db.updatePersonByCpf(input.cpf, newPerson)

        return ({
            message: "updated success"
        })

    }
}

interface UpdatePersonByCpfInput {
    name:string,
    age: number,
    civilStatus:string,
    cpf:string,
    city:string,
    state:string
}

interface UpdatePersonByCpfOutput {
    message: string
}