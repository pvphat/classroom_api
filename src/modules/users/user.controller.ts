import { Controller, Get, Body, Param, Post, Delete } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto } from "./user.dto";

@Controller('user')
export class UserController {

    constructor (
        private userService: UserService
    ){}

    @Get()
    async getAllUser() {
        return await this.userService.getAllUser();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        return await this.userService.getOneBy({id});
    }

    @Post()
    async createUser(@Body() body: UserDto) {
        return await this.userService.create(body);
    }

    @Delete(":id")
    async delete(@Param('id') id: string) {
        return await this.userService.delete(id);
    }

    /*@Get('children/:id')
    async getChildren(@Param('id') id: string){
        return await this.userService.getDescendants(id);
    }*/
}
