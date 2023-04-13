import { PrismaService } from '#Modules/Prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { parse } from 'papaparse';

@Injectable()
export class DrugService {
  constructor(private prisma: PrismaService) {}

  async importDrugs() {
    const drugs = await this.readFromCsv();

    return drugs;
  }

  async readFromCsv() {
    return new Promise((resolve, reject) => {
      parse(createReadStream('./files/drugs.csv'), {
        header: false,
        complete(results) {
          resolve(results.data);
        },
        error(err) {
          reject(err);
        },
      });
    });
  }
}
