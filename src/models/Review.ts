import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Wine } from "./Wine";

@Entity('reviews')
class Review {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    review: string

    @Column()
    evaluation: number

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @Column()
    wine_id: number

    @JoinColumn({ name: 'wine_id' })
    @ManyToOne(() => Wine)
    wine: Wine
}

export { Review }