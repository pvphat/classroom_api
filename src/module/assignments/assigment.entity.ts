import { Column, Entity, Generated, PrimaryColumn } from "typeorm";

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

}