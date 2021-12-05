import { IUserWine } from './../interfaces/IUserWine';
import { getCustomRepository } from 'typeorm';
import { UserWineRepository } from '../repositories/UserWineRepository';
import { UsersRepository } from '../repositories/UserRepository';
import { WinesRepository } from '../repositories/WineRepository';

class UserWineService {
    async handle(relation: IUserWine) {
        const reposRelation = getCustomRepository(UserWineRepository);            
        // Verifica se o id das relações existem
        if (await this.userExists(relation.user_id) && await this.wineExists(relation.wine_id)) {
            
            // Verifica não possui relações duplicadas
            const relationAlreadyExists = await reposRelation.findOne({
                where: { user_id: relation.user_id, wine_id: relation.wine_id }
            });
            if (!relationAlreadyExists) {
                const userWine = reposRelation.create({ user_id: relation.user_id, wine_id: relation.wine_id });
                await reposRelation.save(userWine);
            }
        } 
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