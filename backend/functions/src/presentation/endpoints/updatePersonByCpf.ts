import { Request, Response } from 'express';
import { UpdatePersonByCpfUC } from '../../business/usecase/updatePersonByCpfUC';
import { PersonDB } from '../../data/personDB';

export const updatePersonByCpfEndpoint = async(req: Request, res: Response) => {
    try{
        const updatePersonByCpfUC = new UpdatePersonByCpfUC(new PersonDB())
        const result = await updatePersonByCpfUC.execute({
            cpf: req.params.cpf,
            name: req.body.name,
            age: req.body.age,
            civilStatus: req.body.civilStatus,
            city: req.body.city,
            state: req.body.state
        })

        res.status(200).send(result)
    }catch(err){
        res.status(err.errorCode || 400).send({
            message: err.message
        })
    }
}