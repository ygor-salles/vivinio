import { hashSync } from "bcryptjs";
import { BeforeInsert, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserWine } from "./UserWine";

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    readonly id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    // Usuário tem vários vinhos e o vinho pertece a vários usuários N - N
    @OneToMany(() => UserWine, userWine => userWine.users)
    userWines: UserWine[]

    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 8);
    }
}

export { User }