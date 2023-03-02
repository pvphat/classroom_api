import { IsString } from 'class-validator';

export class ClassDto {
    @IsString()
    name: string;

    @IsString()
    section: string;

    @IsString()
    subject: string;

    @IsString()
    room: string;
}