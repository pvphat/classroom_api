import { Injectable } from "@nestjs/common";
import { BeanManagementService } from "./bean-management.service";

@Injectable()
export class BaseService {

    deleteRelationship = {
    }

    constructor(
        public beanManagementService: BeanManagementService,
        public beanRepository,
    ){
    }

    async getAll() {
        return await this.beanRepository.find(
            {withDeleted: false}
        );
    }

    async getOneBy(info: any){
        return await this.beanRepository.findOneBy(info);
    }

    async create(info: any){
        return await this.beanRepository.save(info);
    }

    async softDelete(id: string){
        return await this.beanRepository.softDelete({id: id});
    }

    async recover(id: string){
        return await this.beanRepository.recover({id: id});
    }
}

