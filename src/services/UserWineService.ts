import { IUserWine } from './../interfaces/IUserWine';
import { getCustomRepository } from 'typeorm';
import { UserWineRepository } from '../repositories/UserWineRepository';
import { UsersRepository } from '../repositories/UserRepository';
import { WinesRepository } from '../repositories/WineRepository';
import { ErrorVivinio } from '../validators/Exceptions/ErrorVivinio';

class UserWineService {
    async handle(relation: IUserWine): Promise<void> {
        const reposRelation = getCustomRepository(UserWineRepository);            
        const userWine = reposRelation.create({ user_id: relation.user_id, wine_id: relation.wine_id });
        await reposRelation.save(userWine);            
    }

    async userExists(id: number): Promise<Boolean> {
        const repositoryUser = getCustomRepository(UsersRepository);
        const user = await repositoryUser.findOne(id);
        return !!user;
    }
    
    async wineExists(id: number): Promise<Boolean> {
        const repositoryWine = getCustomRepository(WinesRepository);
        const wine = await repositoryWine.findOne(id);
        return !!wine;
    }
}

export { UserWineService }