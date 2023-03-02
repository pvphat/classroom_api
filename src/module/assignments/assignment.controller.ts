import { Body, Controller, Get, Post, Param } from "@nestjs/common";
import { AssignmentService } from "./assignment.service";

@Controller('assignment')
export class AssignmentController {

    constructor(
        private assignmentService: AssignmentService
    ){}

    @Get()
    async getAllAssignments(){
        return await this.assignmentService.getAllAssignment();
    }

    @Get(':id')
    async getAssignmentById(@Param('id') id: string){
        return await this.assignmentService.getOneBy({id});
    }

    @Post()
    async createAssignment(@Body() body: any){
        return await this.assignmentService.create(body);
    }
}