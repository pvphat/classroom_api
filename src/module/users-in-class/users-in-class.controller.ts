import { UsersInClassService } from './users-in-class.service';
import { Body, Controller, Get, Post } from "@nestjs/common";


//For test use only
@Controller('usersinclass')
export class UsersInClassController {
    constructor(
        private usersInClassService: UsersInClassService
    ){}

    @Get()
    async getAll(){
        return await this.usersInClassService.findAll();
    }

    @Post()
    async create(@Body() body){
        return await this.usersInClassService.create(body);
    }
}