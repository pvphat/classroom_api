import { PostEntity } from '../posts/post.entity';
import { UsersInClassEntity } from '../users-in-class/users-in-class.entity';
import { AssignmentEntity } from '../assignments/assigment.entity';
import { UserEntity } from '../users/user.entity';
import { Column, PrimaryColumn, Generated, ManyToOne, Entity, JoinColumn, OneToMany, ManyToMany, JoinTable, Tree, TreeParent, TreeChildren } from 'typeorm';
import { BaseEntity } from 'src/common/base.entity';

@Entity("Class")
export class ClassEntity extends BaseEntity {
    
    @PrimaryColumn()
    @Generated("uuid")
    id: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    section: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    subject: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    room: string;

    @Column()
    @Generated("uuid")
    code: string;

    @ManyToOne(() => UserEntity, (user) => user.ownedClasses, {
        cascade: true
    })
    @JoinColumn({
        name: "owner_id"
    })
    owner: UserEntity;

    @OneToMany(()=> AssignmentEntity, (assignment) => assignment.class)
    assignments: AssignmentEntity[];

    @OneToMany(()=> UsersInClassEntity, (classHasUsers) => classHasUsers.class)
    users: UsersInClassEntity[];

    @OneToMany(()=>PostEntity, (post)=>post.class)
    posts: PostEntity[];
}