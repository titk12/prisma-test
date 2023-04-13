import { PrismaService } from '#Modules/Prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import { parse } from 'papaparse';

@Injectable()
export class DrugService {
  constructor(private prisma: PrismaService) {}

  async importDrugs() {
    const drugs: any = await this.readFromCsv();

    drugs.forEach(async (drug) => {
      await this.prisma.drug.create({ data: { title: drug[1] } });
    });

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
