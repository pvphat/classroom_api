import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';

@Entity("People")
export class PeopleEntity {
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