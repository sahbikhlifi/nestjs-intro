// import { Controller, Get, Request, Post, UseGuards, Body } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { AuthService } from './auth.service';

// @Controller('auth')
// export class AppController {
//   constructor(private readonly authService: AuthService) {}

//   @UseGuards(AuthGuard('local'))
//   @Post('auth/login')
//   async login(@Body('username') username, @Body('password') password) {
//     return this.authService.login({username,password});
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @Get('profile')
//   getProfile(@Request() req) {
//     return req.user;
//   }
// }