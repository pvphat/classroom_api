import { Controller, Get } from "@nestjs/common";
import { PeopleService } from "./people.service";

@Controller('people')
export class PeopleController {

    constructor (
        private peopleService: PeopleService
    ){}

    @Get()
    async Helloworld() {
        return await this.peopleService.HelloWorld();
    }

}
