import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { UsersRepository } from '../repositories/UserRepository';

class UserValidator {
    async idExist(id: number): Promise<Boolean> {
        const repository = getCustomRepository(UsersRepository);
        const user = await repository.findOne(id);
        return !!user;
    }

    async emailExist(email: string): Promise<Boolean> {
        const repository = getCustomRepository(UsersRepository);
        const user = await repository.findOne({ email });
        return !!user
    }

    createValidation() {
        return yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().email('Should be e-mail').required('E-mail is required'),
            password: yup.string().required('Password is required'),
        })
    }

    updateValidation() {
        return yup.object().shape({
            id: yup.number().required('Id is required in params'),
            name: yup.string().optional(),
            email: yup.string().email('Should be e-mail').optional(),
            password: yup.string().optional(),
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

export { UserValidator }