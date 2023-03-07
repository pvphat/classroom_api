import { SubmissionEntity } from './../submissions/submission.entity';
import { AssigneeEntity } from '../assignees/assignee.entity';
import { PostEntity } from './../posts/post.entity';
import { UsersInClassEntity } from './../users-in-class/users-in-class.entity';
import { Entity, Column, OneToMany, PrimaryColumn, Generated } from 'typeorm';
import { ClassEntity } from '../classes/class.entity';

@Entity("User")
export class UserEntity {
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

    @OneToMany(()=>AssigneeEntity, (assignment2User)=>assignment2User.user)
    assignments: AssigneeEntity[];

    @OneToMany(()=> SubmissionEntity, (submission)=> submission.user)
    submissions: SubmissionEntity[];
    
}