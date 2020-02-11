import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductsModule, UsersModule,AuthModule, MongooseModule.forRoot('mongodb://localhost:27017/nestcrud')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {} 
