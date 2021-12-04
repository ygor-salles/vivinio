import { IReview } from '../interfaces/IReview';
import { Request, Response } from "express"
import { ReviewService } from "../services/ReviewService";
import { ErrorVivinio } from "../validators/Exceptions/ErrorVivinio";
import { ReviewValidator } from "../validators/ReviewValidator";

class ReviewController {
    async create(request: Request, response: Response) {
        const { review, evaluation, wine_id }: IReview = request.body;

        const reviewValidator = new ReviewValidator();
        try {
            await reviewValidator.createValidation().validate(request.body, { abortEarly: false });
        } catch (error) {
            throw new ErrorVivinio(400, error.message || error);
        }

        const reviewService = new ReviewService();
        const reviewObj = await reviewService.create({ review, evaluation, wine_id });
        return response.status(201).json(reviewObj);
    }

    async deleteById(request: Request, response: Response) {
        const { id } = request.params;

        const reviewValidator = new ReviewValidator();
        try {
            await reviewValidator.deleteByIdValidation().validate({ id: +id }, { abortEarly: false });
            if (!await reviewValidator.idExist(+id)) throw 'Review does not exist';
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const reviewService = new ReviewService();
        await reviewService.deleteById(+id);
        return response.status(200).json({ message: 'Review deleted successfully' });
    }
    
    async updateById(request: Request, response: Response) {
        const { id } = request.params;
        const { ...data }: IReview = request.body;

        const reviewValidator = new ReviewValidator();
        try {
            await reviewValidator.updateValidation().validate({ id: +id, ...data }, { abortEarly: false });
            if (!await reviewValidator.idExist(+id)) throw 'Review does not exist';
        } catch (error) {
            throw new ErrorVivinio(error.message ? 400 : 404, error.message || error)
        }

        const reviewService = new ReviewService();
        await reviewService.updateById(+id, data);
        return response.status(200).json({ message: 'Review updated successfully' });
    }
}

export { ReviewController }