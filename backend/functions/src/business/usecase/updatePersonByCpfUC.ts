import { PersonDB } from "../../data/personDB";
import { Person } from "../entities/person";
import { CpfCeck } from "../../utils/cpfCheck";
import { BadRequestError } from "../errors/badRequestError";

export class UpdatePersonByCpfUC {
    constructor(private db: PersonDB) { }

    public async execute(input: UpdatePersonByCpfInput): Promise<UpdatePersonByCpfOutput> {

        try {
            const isValidCpf = new CpfCeck()
            if (isValidCpf.validateCpf(input.cpf) === false) {
                throw new BadRequestError('O CPF é Inválido')
            }

            if (
                !input.name ||
                !input.age ||
                !input.civilStatus ||
                !input.cpf ||
                !input.city ||
                !input.state
            ) {
                throw new BadRequestError('Está faltando preencher algum campo!')
            }

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
                message: "Atualizado com sucesso"
            })
        } catch (err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            }
        }

    }
}

interface UpdatePersonByCpfInput {
    name: string,
    age: number,
    civilStatus: string,
    cpf: string,
    city: string,
    state: string
}

interface UpdatePersonByCpfOutput {
    message: string
}