import { Column, ManyToOne } from "typeorm";

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
        type: "datetime"
    })
    updated_at: Date;
}