import { UserEntity } from '../users/user.entity';
import { Column, PrimaryColumn, Generated, ManyToOne, Entity } from 'typeorm';

@Entity()
export class ClassEntity {
    
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

}