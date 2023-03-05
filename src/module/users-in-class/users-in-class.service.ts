import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { UsersInClassEntity } from "./users-in-class.entity";

@Injectable()
export class UsersInClassService {

    constructor(
        @InjectRepository(UsersInClassEntity)
        private usersInClassEntity: Repository<UsersInClassEntity>
    ){}

    async create(info: any){
        return await this.usersInClassEntity.save(info);
    }

    async findAll(){
        return await this.usersInClassEntity.find();
    }
}