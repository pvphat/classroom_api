import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}
    
    async getAllUser() {
        return this.userRepository.find();
    }

    async getOneBy(info: any){
        return this.userRepository.findOneBy(info);
    }

    async create(info: any){
        return this.userRepository.save(info);
    }

    async delete(id: string){
        return this.userRepository.delete({id: id});
    }
}