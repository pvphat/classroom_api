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

    async getAll(){
        return await this.classRepository.find(
            {
                withDeleted: false
            }
        );
    }

    async getOneBy(info: any){
        return await this.classRepository.findOneBy(info);
    }

    async create(info: any){
        return await this.classRepository.save(info);
    }
}