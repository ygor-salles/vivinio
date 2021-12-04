import { getCustomRepository, Repository } from 'typeorm';
import { IReview } from '../interfaces/IReview';
import { Review } from '../models/Review';
import { ReviewsRepository } from '../repositories/ReviewRepository';

class ReviewService {
    private repositoryReview: Repository<Review>;

    constructor() {
        this.repositoryReview = getCustomRepository(ReviewsRepository);
    }

    async create(data: IReview) {
        const review = this.repositoryReview.create(data);
        await this.repositoryReview.save(review);
        return review;
    }

    async deleteById(id: number) {
        await this.repositoryReview.delete(id);
    }

    async updateById(id: number, data: IReview) {
        await this.repositoryReview.update(id, data);
    }
}

export { ReviewService };
