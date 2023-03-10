import { SubmisssionService } from './submission.service';
import { Body, Controller, Get, Post } from "@nestjs/common";
import { SubmisssionDto } from './submission.dto';

@Controller('submissions')
export class SubmissionController {

    constructor(
        private submissionService: SubmisssionService
    ){}

    @Get()
    async getAll(){
        return await this.submissionService.findAll()
    }

    @Post()
    async create(@Body() body){
        return await this.submissionService.create(body);
    }
}

