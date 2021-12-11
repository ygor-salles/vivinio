import { getCustomRepository } from 'typeorm';
import * as yup from 'yup';
import { ReviewsRepository } from '../repositories/ReviewRepository';

class ReviewValidator {
    async idExist(id: number): Promise<Boolean> {
        const repository = getCustomRepository(ReviewsRepository);
        const review = await repository.findOne(id);
        return !!review;
    }

    createValidation() {
        return yup.object().shape({
            review: yup.string().optional(),
            evaluation: yup.number().required('Evaluation is required'),
            wine_id: yup.number().required('Wine id referece is required')
        })
    }

    updateValidation() {
        return yup.object().shape({
            id: yup.number().required('Id is required in params'),
            review: yup.string().optional(),
            evaluation: yup.number().optional(),
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

export { ReviewValidator }