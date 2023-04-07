import { Module } from '@nestjs/common';

import { PrismaModule } from '#Modules/Prisma/prisma.module';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
