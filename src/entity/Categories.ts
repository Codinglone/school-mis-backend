import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    categoryName: string 
    @Column()
    duration: string 
    @CreateDateColumn({type: Date})
    registeredOn: Date
    @UpdateDateColumn({type: Date})
    updatedOn: Date
}