import { Column, DeleteDateColumn, ManyToOne } from "typeorm";

export abstract class BaseEntity {
    @Column({
        default: false
    })
    is_deleted: boolean;

    @Column({
        type: "datetime"
    })
    created_at: Date;

    @Column({
        type: "datetime",
        nullable: true
    })
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}