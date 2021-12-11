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

    @ManyToOne(() => Wine, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    @JoinColumn({ name: 'wine_id' })
    wine: Wine
}

export { Review }