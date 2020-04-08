import { PersonDB } from "../../data/personDB";
import { Person } from "../entities/person";
import { BadRequestError } from "../errors/badRequestError";
import { CpfCeck } from "../../utils/cpfCheck";

export class InsertNewPersonUC {
    constructor(private db: PersonDB) { }

    public async execute(input: InsertNewPersonInput): Promise<InsertNewPersonOutput> {

        try {

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

            const isValidCpf = new CpfCeck()
            if(isValidCpf.validateCpf(input.cpf) === false){
                throw new BadRequestError('O CPF é Inválido')
            }

            const newPerson = new Person(
                input.name,
                input.age,
                input.civilStatus,
                input.cpf,
                input.city,
                input.state
            )

            const response = await this.db.insertNewPerson(newPerson)

            if (response === false) {
                throw new BadRequestError("Esse CPF já está cadastrado no sistema")
            }

            return ({
                message: "Inserção concluída"
            })

        } catch (err) {
            throw {
                code: err.statusCode || 400,
                message: err.message || 'Algum erro ocorreu durante a requisição'
            }
        }
    }
}

interface InsertNewPersonInput {
    name: string,
    age: number,
    civilStatus: string,
    cpf: string,
    city: string,
    state: string
}

interface InsertNewPersonOutput {
    message: string
}