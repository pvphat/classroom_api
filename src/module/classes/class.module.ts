import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { Module } from "@nestjs/common";
import { ClassEntity } from './class.entity';

@Module({
    imports: [TypeOrmModule.forFeature([ClassEntity])],
    providers: [ClassService],
    controllers: [ClassController],
    exports: []
})
export class ClassModule{
    
}