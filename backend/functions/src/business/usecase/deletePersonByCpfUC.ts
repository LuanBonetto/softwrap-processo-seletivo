import { PersonDB } from "../../data/personDB";

export class DeletePersonByCpfUC {
    constructor(private db:PersonDB){}

    public async execute(input:DeletePersonByCpfInput): Promise<DeletePersonByCpfOutput>{

        try{
            await this.db.deletePersonByCpf(input.cpf)

            return ({
                message: "Success"
            })
        }catch(err){
            throw new Error(err)
        }

    }
}

interface DeletePersonByCpfInput {
    cpf: string
}

interface DeletePersonByCpfOutput {
    message: string
}