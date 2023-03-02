import {Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn} from 'typeorm';
import { ClassEntity } from '../classes/class.entity';

@Entity("User")
export class UserEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50,        
        unique: true
    })
    email: string;
}