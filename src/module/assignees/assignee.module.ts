import { AssigneeController } from './assignee.controller';
import { AssigneeService } from './assignee.service';
import { AssigneeEntity } from './assignee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([AssigneeEntity])],
    providers: [AssigneeService],
    controllers: [AssigneeController],
    exports: []
})
export class AssigneeModule {}