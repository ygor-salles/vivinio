import { IUser } from './../models/interfaces/IUser';
import { Request, Response } from "express"
import { UserService } from "../services/UserService";
import { ErrorVivinio } from "../validators/Exceptions/ErrorVivinio";
import { UserValidator } from "../validators/UserValidator";

class UserController {
    async create(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const userValidator = new UserValidator();
        try {
            if (await userValidator.emailExist(email)) throw 'Usuário já existe';
            await userValidator.createValidation().validate(request.body, { abortEarly: false });
        } catch (error) {
            throw new ErrorVivinio(400, error.message);
        }

        const userService = new UserService();
        const user = await userService.create({ name, email, password });
        return response.status(201).json(user);
    }

    async read(request: Request, response: Response) {
        const userService = new UserService();
        const user = await userService.read();
        return response.status(200).json(user);
    }

    async readById(request: Request, response: Response) {
        const { id } = request.params;

        const userValidator = new UserValidator();
        try {
            if (!await userValidator.idExist(+id)) throw 'Usuário não existe';
            await userValidator.readByIdValidation().validate({ id: +id }, { abortEarly: false });
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const userService = new UserService();
        const user = await userService.readById(+id);
        return response.status(200).json(user);
    }

    async deleteById(request: Request, response: Response) {
        const { id } = request.params;

        const userValidator = new UserValidator();
        try {
            if (!await userValidator.idExist(+id)) throw 'Usuário não existe';
            await userValidator.readByIdValidation().validate({ id: +id }, { abortEarly: false });
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const userService = new UserService();
        await userService.deleteById(+id);
        return response.status(200).json({ message: 'Usuário deleteado com sucesso' });
    }
    
    async updateById(request: Request, response: Response) {
        const { id } = request.params;
        const { ...data }: IUser = request.body;

        const userValidator = new UserValidator();
        try {
            if (!await userValidator.idExist(+id)) throw 'Usuário não existe';
            await userValidator.readByIdValidation().validate(
                { id: +id, ...data }, 
                { abortEarly: false }
            );
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const userService = new UserService();
        await userService.updateById(+id, data);
        return response.status(200).json({ message: 'Usuário atualizado com sucesso' });
    }
}

export { UserController }