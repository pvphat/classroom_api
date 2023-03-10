import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { ClassEntity } from "./class.entity";

@Injectable()
export class ClassService{
 
    constructor(
        @InjectRepository(ClassEntity)
        private classRepository: Repository<ClassEntity>
    ){}

    async getAllClass(){
        return await this.classRepository.find();
    }

    async getOneBy(info: any){
        return await this.classRepository.findOneBy(info);
    }

    async create(info: any){
        return await this.classRepository.save(info);
    }
}