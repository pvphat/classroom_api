import { UsersInClassController } from './users-in-class.controller';
import { UsersInClassService } from './users-in-class.service';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersInClassEntity } from "./users-in-class.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UsersInClassEntity])],
    providers: [UsersInClassService],
    controllers: [UsersInClassController]
})
export class UsersInClassModule {}