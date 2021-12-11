import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { WinesRepository } from '../repositories/WineRepository';

class WineValidator {
    async idExist(id: number): Promise<Boolean> {
        const repository = getCustomRepository(WinesRepository);
        const wine = await repository.findOne(id);
        return !!wine;
    }

    async nameProducerExists(name: string, producer: string): Promise<Boolean> {
        const repository = getCustomRepository(WinesRepository);
        const wine = await repository.findOne({ name, producer });
        return !!wine
    }

    createValidation() {
        return yup.object().shape({
            name: yup.string().required('Name is required'),
            producer: yup.string().required('Producer is required'),
            country: yup.string().required('Country is required'),
            type: yup.string().required('Type is required'),
            type_grape: yup.string().required('Type grape is required'),
            harmonizing: yup.string().optional(),
            user_id: yup.number().required('User id is required'),
        })
    }

    updateValidation() {
        return yup.object().shape({
            id: yup.number().required('Id is required in params'),
            name: yup.string().optional(),
            producer: yup.string().optional(),
            country: yup.string().optional(),
            type: yup.string().optional(),
            type_grape: yup.string().optional(),
            harmonizing: yup.string().optional(),
        })
    }

    deleteByIdValidation() {
        return yup.object().shape({
            id: yup.number().required('Id is required in params')
        })
    }

    readByIdValidation() {
        return yup.object().shape({
            id: yup.number().required('Id is required in params')
        })
    }
}

export { WineValidator }