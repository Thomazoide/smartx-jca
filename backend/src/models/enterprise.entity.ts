import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class Enterprise {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    iconURL: string | undefined
    @OneToMany( () => Employee, (employee) => employee.enterprise )
    employees!: Employee[]
}