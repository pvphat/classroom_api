import { UserEntity } from './../users/user.entity';
import { AssignmentEntity } from './../assignments/assigment.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("AssignmentsToUsers")
export class AssignmentsToUsersEntity {

    @Column({
        type: "float"
    })
    grade: number;

    @ManyToOne(()=>AssignmentEntity, (assignment)=> assignment.users)
    @JoinColumn({
        name: "assignment_id"
    })
    assignment: AssignmentEntity;

    @ManyToOne(()=>UserEntity, (user)=> user.assignments)
    @JoinColumn({
        name: "user_id"
    })
    user: UserEntity;

    @PrimaryColumn()
    assignment_id: string;

    @PrimaryColumn()
    user_id: string;
}

