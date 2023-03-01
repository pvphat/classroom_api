import {IsString, IsNotEmpty} from 'class-validator';

export class UserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;
}
