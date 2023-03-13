import { AssignmentEntity } from './assigment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from './assignment.service';
import { Module } from "@nestjs/common";
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [AssignmentController],
})
export class AssignmentModule{

}