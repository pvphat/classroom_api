import { UsersInClassController } from './users-in-class.controller';
import { UsersInClassService } from './users-in-class.service';
import { Module } from "@nestjs/common";
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [UsersInClassController]
})
export class UsersInClassModule {}