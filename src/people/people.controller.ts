import { Controller, Get } from "@nestjs/common";

@Controller('people')
export class PeopleController{
    
    @Get()
    findAll(): string{
        return "Access complete";
    }

}
