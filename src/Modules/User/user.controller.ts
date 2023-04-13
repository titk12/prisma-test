import { User as UserModel } from '@prisma/client';
import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async signupUser(@Body() userData: { name?: string; email: string }): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
