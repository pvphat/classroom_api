import { ClassService } from './class.service';
import { Body, Controller, Get, Param, Post } from "@nestjs/common";

@Controller('class')
export class ClassController{

    constructor(
        private classService: ClassService
    ){}

    @Get()
    async getAllClass(){
        return await this.classService.getAllClass();
    }

    @Get(':id')
    async getClassById(@Param('id') id: string){
        return await this.classService.getOneBy({id});
    }

    @Post()
    async createClass(@Body() body){
        return await this.classService.create(body);        
    }
}