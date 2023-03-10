import { ClassEntity } from '../classes/class.entity';
import { UserEntity } from '../users/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, Tree, TreeChildren } from "typeorm";

@Entity("UsersInClass")
export class UsersInClassEntity {

    @Column({
        type: "varchar",
        length: 50
    })
    role: string;

    @PrimaryColumn()
    user_id: string;

    @PrimaryColumn()
    class_id: string;

    @ManyToOne(()=> UserEntity, (user)=> user.inClasses)
    @JoinColumn({
        name: "user_id"
    })
    user: UserEntity;

    @ManyToOne(()=> ClassEntity, (classEntity)=> classEntity.users)
    @JoinColumn({
        name: "class_id"
    })
    class: ClassEntity;
}
