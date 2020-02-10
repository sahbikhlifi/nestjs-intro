import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import {  UsersService } from './user.service'
import { User } from "./user.interfeces";


@Controller('users')
export class UsersController {
constructor(private readonly productsService : UsersService){}

    @Post()
    
    async addProduct(  @Body() obj: any ): Promise<User> {
           const generatedId =  this.productsService.insertUser(obj);
           return await this.productsService.insertUser(obj);
        }

        @Get()
        async getAllProducts(){
            const products = await this.productsService.getUsers();
            return products
        }

        @Get(':id')
        async getProduct(@Param('id') prodId:string){
        return await this.productsService.getOneUser(prodId)
        }

        @Post('update/:id')
        async updateUser(
            @Param('id') userId:string,
            @Body('username') userName:string,
            @Body('mail') userMail:string,
            @Body('password') userPassword:string,){
            const data={username: userName  , mail: userMail , passwords : userPassword}
            await this.productsService.updateUser(userId,data)
            return null;
            }

        @Post(':id')
        async removeProduct(@Param('id') userId:string ){
            return await this.productsService.deleteUser(userId)
        }
}

