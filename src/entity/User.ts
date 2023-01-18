import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    password: string 

    @Column()
    role: string 

    @Column()
    school: string

    @CreateDateColumn({type: Date})
    createdAt: Date

    @UpdateDateColumn({type: Date})
    updatedAt: Date
}
