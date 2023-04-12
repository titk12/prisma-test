import { Module } from '@nestjs/common';

import { PrismaModule } from '#Modules/Prisma/prisma.module';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [PrismaModule],
  providers: [PostService],
  exports: [PostService],
  controllers: [PostController],
})
export class PostModule {}
