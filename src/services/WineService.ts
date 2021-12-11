import { getCustomRepository, Repository } from 'typeorm';
import { IWine } from '../interfaces/IWine';
import { Wine } from '../models/Wine';
import { WinesRepository } from '../repositories/WineRepository';

class WineService {
    private repositoryWine: Repository<Wine>;

    constructor() {
        this.repositoryWine = getCustomRepository(WinesRepository);
    }

    async create(data: IWine) {
        const wine = this.repositoryWine.create(data);
        await this.repositoryWine.save(wine);
        return wine;
    }

    async read() {
        const allWines = await this.repositoryWine.find();
        return allWines;
    }

    async readById(id: number) {
        const wine = await this.repositoryWine.findOne(id);
        return wine;
    }

    async deleteById(id: number) {
        await this.repositoryWine.delete(id);
    }

    async updateById(id: number, data: IWine) {
        const wine = this.repositoryWine.create(data)
        await this.repositoryWine.update(id, wine);
    }
}

export { WineService };
