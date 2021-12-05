import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Wine } from "./Wine";

@Entity('user_wine')
class UserWine {
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    user_id: number;

    @Column()
    wine_id: number;

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => Wine)
    @JoinColumn({name: 'wine_id'})
    wine: Wine;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    user: User;
}

export { UserWine }