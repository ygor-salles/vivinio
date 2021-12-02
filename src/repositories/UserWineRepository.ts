import { EntityRepository, Repository } from "typeorm";
import { UserWine } from "../models/UserWine";

@EntityRepository(UserWine)
class UserWineRepository extends Repository<UserWine> {}

export { UserWineRepository }