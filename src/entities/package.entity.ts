import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Package {
    @PrimaryGeneratedColumn()
    id: number
}