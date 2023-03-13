import { PostEntity } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Module } from "@nestjs/common";
import { ServiceModule } from 'src/common/service.module';

@Module({
    imports: [
        ServiceModule,
    ],
    controllers: [PostController],
})
export class PostModule {
}