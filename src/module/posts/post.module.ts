import { PostEntity } from './post.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { Module } from "@nestjs/common";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    providers: [PostService],
    controllers: [PostController],
    exports: []
})
export class PostModule {
}