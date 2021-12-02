import { EntityRepository, Repository } from "typeorm";
import { Wine } from "../models/Wine";

@EntityRepository(Wine)
class WinesRepository extends Repository<Wine> {}

export { WinesRepository }