import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { Module } from "@nestjs/common";
import { ClassEntity } from './class.entity';
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [ClassController],
})
export class ClassModule{
    
}