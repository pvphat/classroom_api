import { PeopleEntity } from './people.entity';
import { Module } from "@nestjs/common";
import { PeopleController } from "./people.controller";
import { PeopleService } from "./people.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([PeopleEntity])],
    controllers: [PeopleController],
    providers: [PeopleService],
    exports: [],
})
export class PeopleModule {}

