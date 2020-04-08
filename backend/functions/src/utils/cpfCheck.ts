import CPF from 'cpf-check';

export class CpfCeck {
    validateCpf(cpf:string):boolean{
        return CPF.validate(cpf)
    }
}