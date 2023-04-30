import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Courses {

    @PrimaryGeneratedColumn("uuid")
    id: string 

    @Column()
    name: string
    
    @Column()
    profile: string
}