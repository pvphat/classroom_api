import {IsString, IsNotEmpty} from 'class-validator';

export class PeopleDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}
