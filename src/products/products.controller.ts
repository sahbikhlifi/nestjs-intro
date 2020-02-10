import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
import {  ProductsService } from './products.service'
import { Product } from "./product.model";
import { get } from "http";

@Controller('products')
export class ProductsController {
constructor(private readonly productsService : ProductsService){}

    @Post()
    
    async addProduct(  @Body() obj: any ): Promise<Product> {
           const generatedId =  this.productsService.insertProduct(obj);
           return await this.productsService.insertProduct(obj);
        }

        @Get()
        async getAllProducts(){
            const products = await this.productsService.getProducts();
            return products
        }

        @Get(':id')
        async getProduct(@Param('id') prodId:string){
        return await this.productsService.getSingelProduct(prodId)
        }

        @Post('update/:id')
        async updateProduct(
            @Param('id') prodId:string,
            @Body('title') prodTitle:string,
            @Body('description') prodDescription:string,
            @Body('price') prodPrice:string,){
            const data={title: prodTitle  , description: prodDescription , price : prodPrice}
            await this.productsService.updateProduct(prodId,data)
            return null;
            }

        @Post(':id')
        async removeProduct(@Param('id') prodId:string ){
            return await this.productsService.deleteProduct(prodId)
        }
}

