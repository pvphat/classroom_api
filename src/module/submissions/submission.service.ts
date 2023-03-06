import { SubmissionEntity } from './submission.entity';
import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class SubmisssionService {

    constructor(
        @InjectRepository(SubmissionEntity)
        private submissionRepository: Repository<SubmissionEntity>
    ){}

    async findAll(){
        return await this.submissionRepository.find();
    }

    async create(info: any){
        return await this.submissionRepository.save(info);
    }
}