import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class BaseService {

    constructor(
        public beanRepo
    ){}

    async delete() {
        
    }

    async findDescendants() {
        return "hello world";
    }
}

