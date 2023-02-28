import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class PeopleEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;
}