import { Module } from '@nestjs/common';

import { PrismaModule } from '#Modules/Prisma/prisma.module';
import { PostService } from './post.service';

@Module({
  imports: [PrismaModule],
  providers: [PostService],
  exports: [PostService],
})
export class PostModule {}
