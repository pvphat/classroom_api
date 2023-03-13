import { Controller, Get, Body, Param, Post, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController {

    constructor (
        private userService: UserService
    ){}

    @Get()
    async getAll() {
        return await this.userService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) {
        return await this.userService.getOneBy({id});
    }

    @Post()
    async create(@Body() body: UserDto) {
        return await this.userService.create(body);
    }

    @Delete(":id")
    async softDelete(@Param('id') id: string) {
        return await this.userService.softDelete(id);
    }

    @Post(":id")
    async recover(@Param('id') id: string){
        return await this.userService.recover(id);
    }
}
