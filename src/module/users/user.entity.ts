import { PostEntity } from './../posts/post.entity';
import { UsersInClassEntity } from './../users-in-class/users-in-class.entity';
import {Entity, Column, PrimaryGeneratedColumn, OneToMany, PrimaryColumn, JoinColumn, ManyToMany} from 'typeorm';
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

    @OneToMany(()=>ClassEntity, (classEntity)=> classEntity.owner)
    ownedClasses: ClassEntity[];

    @OneToMany(()=> UsersInClassEntity, (userInClass)=> userInClass.user)
    inClasses: UsersInClassEntity[];

    @OneToMany(()=>PostEntity, (post)=>post.user)
    posts: PostEntity[];
    
}