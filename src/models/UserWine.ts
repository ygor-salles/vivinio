import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export { UserWine }