import { Controller, Get, Body, Param, Post, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController {

    constructor (
        private peopleService: UserService
    ){}

    @Get()
    async getAllUser() {
        return await this.peopleService.getAllUser();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.peopleService.getOneBy({id});
    }

    @Post()
    async createUser(@Body() body: UserDto) {
        return await this.peopleService.create(body);
    }

    
}
