import { Module } from '@nestjs/common';

import * as Modules from '#Modules';

@Module({
  imports: [...Object.values(Modules)],
  controllers: [],
  providers: [],
})
export class AppModule {}
