import { AssignmentEntity } from './assigment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignmentController } from './assignment.controller';
import { AssignmentService } from './assignment.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([AssignmentEntity])],
    providers: [AssignmentService],
    controllers: [AssignmentController],
    exports: []
})
export class AssignmentModule{

}