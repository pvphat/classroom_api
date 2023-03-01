import { Injectable } from "@nestjs/common";
import { PeopleEntity } from "./people.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DataSource } from "typeorm";

@Injectable()
export class PeopleService {

    constructor(
        @InjectRepository(PeopleEntity)
        private peopleRepository: Repository<PeopleEntity>
    ){}
    
    async getAllUser() {
        return this.peopleRepository.find();
    }

    async getOneBy(info: any){
        return this.peopleRepository.findOneBy(info);
    }

    async create(info: any){
        return this.peopleRepository.save(info);
    }
}