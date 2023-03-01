import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

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