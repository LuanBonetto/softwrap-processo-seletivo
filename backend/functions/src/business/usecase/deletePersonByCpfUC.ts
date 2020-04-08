import { PersonDB } from "../../data/personDB";

export class DeletePersonByCpfUC {
    constructor(private db: PersonDB) { }

    public async execute(input: DeletePersonByCpfInput): Promise<DeletePersonByCpfOutput> {

        try {

            await this.db.deletePersonByCpf(input.cpf)

            return ({
                message: "Deletado com Sucesso"
            })
        } catch (err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            }
        }

    }
}

interface DeletePersonByCpfInput {
    cpf: string
}

interface DeletePersonByCpfOutput {
    message: string
}