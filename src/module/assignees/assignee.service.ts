import { AssigneeEntity } from './assignee.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AssigneeService {
    constructor(
        @InjectRepository(AssigneeEntity)
        private assigneeEntity: Repository<AssigneeEntity>
    ){}

    async findAll(){
        return await this.assigneeEntity.find();
    }

    async create(info: any){
        return await this.assigneeEntity.save(info);
    }
}
