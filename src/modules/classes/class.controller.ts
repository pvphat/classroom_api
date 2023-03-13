import { ClassService } from './class.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('class')
export class ClassController{

    constructor(
        private classService: ClassService
    ){}

    @Get()
    async getAll(){
        return await this.classService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.classService.getOneBy({id});
    }

    @Post()
    async create(@Body() body){
        return await this.classService.create(body);        
    }
}