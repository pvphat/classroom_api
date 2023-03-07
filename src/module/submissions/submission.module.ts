import { SubmissionEntity } from './submission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmisssionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([SubmissionEntity])],
    providers: [SubmisssionService],
    controllers: [SubmissionController]
})
export class SubmissionModule {}

