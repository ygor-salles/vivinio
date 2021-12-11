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

    @OneToMany(() => UserWine, userwine => userwine.wine)
    user_wine: UserWine[];

    @OneToMany(() => Review, review => review.wine, { eager: true })
    reviews: Review[];
}

export { Wine }