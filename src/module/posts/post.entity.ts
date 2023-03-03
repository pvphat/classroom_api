import { Entity, Column, PrimaryColumn, Generated } from "typeorm";

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

}