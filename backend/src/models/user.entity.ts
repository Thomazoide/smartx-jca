import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number
    @Column()
    username!: string
    @Column()
    name!: string
    @Column()
    email: string | undefined
    @Column()
    password!: string
}