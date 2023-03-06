import { SubmisssionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [],
    providers: [SubmisssionService],
    controllers: [SubmissionController]
})
export class SubmissionModule {}

