import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './Modules/Post/post.service';
import { UserService } from './Modules/User/user.service';
import { PrismaService } from './Modules/Prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PostService, UserService, PrismaService],
})
export class AppModule {}
