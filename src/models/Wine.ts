import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Review } from "./Review";
import { UserWine } from "./UserWine";

@Entity('wines')
class Wine {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @Column()
    producer: string

    @Column()
    country: string

    @Column()
    type: string

    @Column()
    type_grape: string

    @Column()
    harmonizing: string

    @Column()
    image_url: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    // Vinho tem vários reviews 1 - N
    @OneToMany(() => Review, review => review.wine)
    reviews: Review[]

    // Usuário tem vários vinhos e o vinho pertece a vários usuários N - N
    @OneToMany(() => UserWine, userWine => userWine.wines)
    userWines: UserWine[]
}

export { Wine }