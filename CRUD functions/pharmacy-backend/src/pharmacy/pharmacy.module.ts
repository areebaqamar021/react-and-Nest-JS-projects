import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacyService } from './pharmacy.service';
import { PharmacyController } from './pharmacy.controller';
import { Pharmacy } from './pharmacy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pharmacy])],
  providers: [PharmacyService],
  controllers: [PharmacyController],
})
export class PharmacyModule {}
