import { UserEntity } from '../users/user.entity';
import { AssignmentEntity } from '../assignments/assigment.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryColumn, Tree } from "typeorm";

@Entity("Assignee")
export class AssigneeEntity {

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

