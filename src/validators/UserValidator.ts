import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { UsersRepository } from '../repositories/UserRepository';

class UserValidator {
    async idExist(id: number) {
        const repository = getCustomRepository(UsersRepository);

        const user = await repository.findOne(id);
        return user ? true : false;
    }

    async emailExist(email: string) {
        const repository = getCustomRepository(UsersRepository);

        const user = await repository.findOne({ email });
        return user ? true : false;
    }

    createValidation() {
        return yup.object().shape({
            name: yup.string().required('Nome é obrigatório'),
            email: yup.string().required('E-mail é obrigatório'),
            password: yup.string().required('Senha é obrigatório'),
        })
    }

    updateValidation() {
        return yup.object().shape({
            name: yup.string().optional(),
            email: yup.string().optional(),
            password: yup.string().optional(),
        })
    }

    deleteByIdValidation() {
        return yup.object().shape({
            id: yup.number().required('Id é obrigatório no parametro da requisição')
        })
    }

    readByIdValidation() {
        return yup.object().shape({
            id: yup.number().required('Id é obrigatório no parametro da requisição')
        })
    }
}

export { UserValidator }