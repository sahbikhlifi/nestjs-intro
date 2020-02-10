import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from './product.interface'
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {

constructor(@InjectModel('Product') private readonly productModel: Model<Product>) { }
async insertProduct(obj:Product){
    const result = await this.productModel.creaate(obj);
    return result;
}

async getProducts(){
    const result = await this.productModel.find();
    return result;
}

async getSingelProduct(productId:string){
    const result = await this.productModel.findById(productId);
    return result;

}
async updateProduct(productId:string, data) {
    const result = await this.productModel.findByIdAndUpdate({_id:productId});
    return result;

}
async deleteProduct(productId:string){
    const result = await this.productModel.findByIdAndDelete(productId);
    return result;

}

} 


