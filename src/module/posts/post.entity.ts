import { UserEntity } from './../users/user.entity';
import { Entity, Column, PrimaryColumn, Generated, ManyToOne, JoinColumn } from "typeorm";
import { ClassEntity } from '../classes/class.entity';

@Entity("Post")
export class PostEntity {
    @PrimaryColumn()
    @Generated("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 100
    })
    content: string;

    @ManyToOne(()=>UserEntity, (user)=> user.posts)
    @JoinColumn({
        name: "user_id"
    })
    user: UserEntity;

    @ManyToOne(()=>ClassEntity)
    @JoinColumn({
        name: "class_id"
    })
    class: ClassEntity;
}