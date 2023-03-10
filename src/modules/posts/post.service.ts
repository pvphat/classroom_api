import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { PostEntity } from "./post.entity";

@Injectable()
export class PostService {
    constructor (
        @InjectRepository(PostEntity)
        private postRepository: Repository<PostEntity>
    ){}

    async findAll(){
        return await this.postRepository.find();
    }

    async findOneBy(info: any){
        return await this.postRepository.findOneBy(info);
    }

    async create(info: any){
        return await this.postRepository.save(info);
    }
}
