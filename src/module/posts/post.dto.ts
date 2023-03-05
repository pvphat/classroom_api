import { IsNotEmpty, IsString } from "class-validator";

export class PostDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    user?: string;

    @IsNotEmpty()
    class?: string;
}