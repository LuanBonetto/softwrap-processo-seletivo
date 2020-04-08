import { PersonDB } from "../../data/personDB";
import { Person } from "../entities/person";

export class InsertNewPersonUC {
    constructor(private db:PersonDB){}

    public async execute(input:InsertNewPersonInput): Promise<InsertNewPersonOutput>{
        try{
        const newPerson = new Person(
            input.name,
            input.age,
            input.civilStatus,
            input.cpf,
            input.city,
            input.state
        )

        const response = await this.db.insertNewPerson(newPerson)

        if (response === false){
            throw new Error("Insert Denied")
        }
        
        return ({
            message: "Insert Success"
        })
        
    }catch(err){
        return ({ 
            message: err.message
        })
    }
    }
}

interface InsertNewPersonInput {
    name:string,
    age: number,
    civilStatus:string,
    cpf:string,
    city:string,
    state:string
}

interface InsertNewPersonOutput {
    message: string
}