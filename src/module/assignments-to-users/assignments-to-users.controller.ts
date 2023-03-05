import { AssignmentsToUsersService } from './assignments-to-users.service';
import { Body, Controller, Get, Post } from "@nestjs/common";


// for test use only
@Controller('assignmentstousers')
export class AssignmentsToUsersController {

    constructor(
        private assignmentsToUsersService: AssignmentsToUsersService
    ){}

    @Get()
    async getAll(){
        return await this.assignmentsToUsersService.findAll();
    }

    @Post()
    async create(@Body() body){
        return await this.assignmentsToUsersService.create(body);
    }
}