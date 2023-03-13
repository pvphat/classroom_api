import { Controller, Get, Post, Param, Body } from "@nestjs/common";
import { PostDto } from "./post.dto";
import { PostService } from "./post.service";

@Controller('post')
export class PostController {
    constructor(
        private postService: PostService
    ){}
    @Get()
    async getAll() {
        return await this.postService.findAll();
    }

    @Get(':id')
    async getOneById(@Param('id') id: string){
        return await this.postService.findOneBy({id});
    }

    @Post()
    async create(@Body() body: PostDto) {
        return await this.postService.create(body);
    }
}
