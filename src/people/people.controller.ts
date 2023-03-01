import { Controller, Get, Body, Param, Post, Delete } from "@nestjs/common";
import { PeopleService } from "./people.service";
import { PeopleDto } from "./people.dto";

@Controller('people')
export class PeopleController {

    constructor (
        private peopleService: PeopleService
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
    async createUser(@Body() body: PeopleDto) {
        return await this.peopleService.create(body);
    }

    
}
