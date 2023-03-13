import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { AssignmentService } from "./assignment.service";

@Controller('assignment')
export class AssignmentController {

    constructor(
        private assignmentService: AssignmentService
    ){}

    @Get()
    async getAll(){
        return await this.assignmentService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string){
        return await this.assignmentService.getOneBy({id});
    }

    @Post()
    async create(@Body() body: any){
        return await this.assignmentService.create(body);
    }
}