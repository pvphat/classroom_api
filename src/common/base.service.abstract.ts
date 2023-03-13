import { Injectable } from "@nestjs/common";

@Injectable()
export abstract class BaseService {

    constructor(
        public beanRepository
    ){}

    async delete() {
        
    }

    async findDescendants() {
        return "hello world";
    }
}

