import { UserEntity } from './../users/user.entity';
import { AssignmentEntity } from './../assignments/assigment.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("Submission")
export class SubmissionEntity {
    @PrimaryColumn()
    @Generated("uuid")
    id: string;

    @Column({
        type: "varchar",
        length: 500
    })
    content: string;

    @Column({
        type: "float"
    })
    grade: number;

    @Column({
        type: "datetime"
    })
    submit_date: Date; 

    @ManyToOne(()=> AssignmentEntity, (assignment)=> assignment.submissions)
    @JoinColumn({
        name: "assignment_id"
    })
    assignment: AssignmentEntity;

    @ManyToOne(()=> UserEntity, (user)=>user.submissions)
    @JoinColumn({
        name: "user_id"
    })
    user: UserEntity;
}
