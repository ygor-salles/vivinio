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

    @ManyToOne(() => Wine, wine => wine.user_wine, { eager: true })
    @JoinColumn({name: 'wine_id', referencedColumnName: 'id'})
    wine: Wine;

    @ManyToOne(() => User, user => user.user_wine)
    @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
    user: User;
}

export { UserWine }