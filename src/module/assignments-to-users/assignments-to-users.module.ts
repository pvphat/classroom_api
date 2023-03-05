import { AssignmentsToUsersController } from './assignments-to-users.controller';
import { AssignmentsToUsersService } from './assignments-to-users.service';
import { AssignmentsToUsersEntity } from './assignments-to-users.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([AssignmentsToUsersEntity])],
    providers: [AssignmentsToUsersService],
    controllers: [AssignmentsToUsersController],
    exports: []
})
export class AssignmentsToUsersModule {}