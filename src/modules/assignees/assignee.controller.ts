import { AssigneeService } from './assignee.service';
import { Body, Controller, Get, Post } from "@nestjs/common";


// for test use only
@Controller('assignees')
export class AssigneeController {

    constructor(
        private assigneeService: AssigneeService
    ){}

    @Get()
    async getAll(){
        return await this.assigneeService.findAll();
    }

    @Post()
    async create(@Body() body){
        return await this.assigneeService.create(body);
    }
}