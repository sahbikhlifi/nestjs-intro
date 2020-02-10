import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UsersService } from "./user.service";
import { UserSchema } from "./user.schema";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'users', schema:  UserSchema}])],
    controllers: [UsersController],
    providers: [UsersService],
})

export class UsersModule {}