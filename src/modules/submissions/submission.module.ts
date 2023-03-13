import { SubmissionEntity } from './submission.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmisssionService } from './submission.service';
import { SubmissionController } from './submission.controller';
import { Module } from "@nestjs/common";
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [SubmissionController]
})
export class SubmissionModule {}

