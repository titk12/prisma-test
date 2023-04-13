import { Controller, Post } from '@nestjs/common';
import { DrugService } from './drug.service';

@Controller('drug')
export class DrugController {
  constructor(private readonly drugService: DrugService) {}

  @Post('import')
  async getPostById() {
    return this.drugService.importDrugs();
  }
}
