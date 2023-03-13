import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { AssignmentEntity } from "./assigment.entity";

@Injectable()
export class AssignmentService {
    constructor(
        @InjectRepository(AssignmentEntity)
        private assignmentRepository: Repository<AssignmentEntity>
    ){}

    async getAll(){
        return await this.assignmentRepository.find();
    }

    async getOneBy(info: any){
        return await this.assignmentRepository.findOneBy(info);
    }

    async create(info :any){
        return await this.assignmentRepository.save(info);
    }
    
}