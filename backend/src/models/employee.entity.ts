import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Enterprise } from "./enterprise.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    name!: string
    @Column()
    email!: string
    @Column()
    rut!: string
    @Column()
    enterpriseId!: number
    @Column()
    isAdmin!: boolean
    @ManyToOne( () => Enterprise, (enterprise) => enterprise.employees )
    @JoinColumn()
    enterprise!: Enterprise
}