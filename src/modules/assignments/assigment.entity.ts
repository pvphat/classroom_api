import { SubmissionEntity } from '../submissions/submission.entity';
import { AssigneeEntity } from '../assignees/assignee.entity';
import { ClassEntity } from '../classes/class.entity';
import { Column, Entity, Generated, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, Tree } from "typeorm";

@Entity("Assignment")
export class AssignmentEntity {
    @PrimaryColumn()
    @Generated("uuid")
    id: string;
    
    @Column({
        type: "varchar",
        length: 50
    })
    title: string;

    @Column({
        type: "varchar",
        length: 50
    })
    instruction: string;

    @Column({
        type: "varchar",
        length: 100
    })
    attachment: string;

    @Column({
        type: "float"
    })
    max_point: number;

    @Column({
        type: "datetime"
    })
    due_date?: Date;

    @ManyToOne(()=> ClassEntity, (classEntity)=>classEntity.assignments)
    @JoinColumn({
        name: "class_id"
    })
    class: ClassEntity;

    @OneToMany(()=> AssigneeEntity, (assignment2User)=>assignment2User.assignment)
    users: AssigneeEntity[];

    @OneToMany(()=> SubmissionEntity, (submission)=> submission.assignment)
    submissions: SubmissionEntity[];
}
