import { AssigneeController } from './assignee.controller';
import { AssigneeService } from './assignee.service';
import { AssigneeEntity } from './assignee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [AssigneeController],
})
export class AssigneeModule {}