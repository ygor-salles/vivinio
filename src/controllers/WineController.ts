import { IWine } from '../interfaces/IWine';
import { Request, Response } from "express"
import { WineService } from "../services/WineService";
import { ErrorVivinio } from "../validators/Exceptions/ErrorVivinio";
import { WineValidator } from "../validators/WineValidator";
import { UserWineService } from '../services/UserWineService';
import { removeImage, uploadImage } from './UploadController';

class WineController {
    async create(request: Request, response: Response) {
        const { ...data }: IWine = request.body;
        data.user_id = +data.user_id;

        const userWineService = new UserWineService();
        const wineValidator = new WineValidator();
        try {
            await wineValidator.createValidation().validate(request.body, { abortEarly: false });
            
            if (await wineValidator.nameProducerExists(data.name, data.producer))
                throw 'Wine already exists';

            if (!await userWineService.userExists(data.user_id))
                throw 'user_id does not exists'

            if (!request.file) 
                throw 'Image is required or invalid extension. It should be only (png, jpg, jpeg, pjpeg, gif)' 
        } catch (error) {
            throw new ErrorVivinio(400, error.message || error);
        }

        data.image_url = await uploadImage(data, request) || '';

        const wineService = new WineService();
        const wine = await wineService.create(data);

        await userWineService.handle({ user_id: data.user_id, wine_id: wine.id })

        return response.status(201).json(wine);
    }

    async read(request: Request, response: Response) {
        const wineService = new WineService();
        const wine = await wineService.read();
        return response.status(200).json(wine);
    }

    async readById(request: Request, response: Response) {
        const { id } = request.params;

        const wineValidator = new WineValidator();
        try {
            await wineValidator.readByIdValidation().validate({ id: +id }, { abortEarly: false });
            if (!await wineValidator.idExist(+id)) throw 'Wine does not exist';
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const wineService = new WineService();
        const wine = await wineService.readById(+id);
        return response.status(200).json(wine);
    }

    async deleteById(request: Request, response: Response) {
        const { id } = request.params;

        const wineValidator = new WineValidator();
        try {
            await wineValidator.deleteByIdValidation().validate({ id: +id }, { abortEarly: false });
            if (!await wineValidator.idExist(+id)) throw 'Wine does not exist';
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const wineService = new WineService();
        await removeImage(+id, wineService);

        await wineService.deleteById(+id);
        return response.status(200).json({ message: 'Wine deleted successfully' });
    }
    
    async updateById(request: Request, response: Response) {
        const { id } = request.params;
        const { ...data }: IWine = request.body;
        data.user_id = +data.user_id

        const wineValidator = new WineValidator();
        try {
            await wineValidator.updateValidation().validate({ id: +id, ...data  }, { abortEarly: false });
            
            if (!await wineValidator.idExist(+id)) throw 'Wine does not exist';
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const wineService = new WineService();
        if (request.file) {
            data.image_url =  await uploadImage(data, request) || '';
            await removeImage(+id, wineService);
        }

        await wineService.updateById(+id, data);
        
        return response.status(200).json({ message: 'Wine updated successfully' });
    }
}

export { WineController }