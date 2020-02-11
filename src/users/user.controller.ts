import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import {  UsersService } from './user.service'
import { User } from "./user.interfeces";


@Controller('users')
export class UsersController {
constructor(private readonly UsersService : UsersService){}

    @Post()
    
    async addProduct(  @Body() obj: User ): Promise<User> {
           
           return await this.UsersService.insertUser(obj);
        }

        @Get()
        async getAllUser(){
            const products = await this.UsersService.getUsers();
            return products
        }

        @Get(':id')
        async getUser(@Param('id') userId:string){
        return await this.UsersService.getOneUser(userId)
        }

        @Post('update/:id')
        async updateUser(
            @Param('id') userId:string,
            @Body('username') userName:string,
            @Body('mail') userMail:string,
            @Body('password') userPassword:string,){
            const data={username: userName  , mail: userMail , passwords : userPassword}
            await this.UsersService.updateUser(userId,data)
            return null;
            }

        @Post(':id')
        async removeUser(@Param('id') userId:string ){
            return await this.UsersService.deleteUser(userId)
        }
}

