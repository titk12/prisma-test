import { PrismaModule } from '#Modules/Prisma/prisma.module';
import { Module } from '@nestjs/common';
import { DrugService } from './drug.service';
import { DrugController } from './drug.controller';

@Module({
  imports: [PrismaModule],
  providers: [DrugService],
  exports: [DrugService],
  controllers: [DrugController],
})
export class DrugModule {}
