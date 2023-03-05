import { AssignmentsToUsersEntity } from './assignments-to-users.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AssignmentsToUsersService {
    constructor(
        @InjectRepository(AssignmentsToUsersEntity)
        private assignmentsToUsersEntity: Repository<AssignmentsToUsersEntity>
    ){}

    async findAll(){
        return await this.assignmentsToUsersEntity.find();
    }

    async create(info: any){
        return await this.assignmentsToUsersEntity.save(info);
    }
}
