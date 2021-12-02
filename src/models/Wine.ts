import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('wines')
class Wine {
    @PrimaryGeneratedColumn()
    readonly id: number

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

    @Column()
    producer: string

    @Column()
    name: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}

export { Wine }