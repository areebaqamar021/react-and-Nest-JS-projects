import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pharmacy } from './pharmacy.entity';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto'; 
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto'; 

@Injectable()
export class PharmacyService {
  constructor(
    @InjectRepository(Pharmacy)
    private readonly pharmacyRepository: Repository<Pharmacy>,
  ) {}

  async create(createPharmacyDto: CreatePharmacyDto): Promise<Pharmacy> {
    const pharmacy = this.pharmacyRepository.create(createPharmacyDto);
    return this.pharmacyRepository.save(pharmacy);
  }

  async findAll(): Promise<Pharmacy[]> {
    return this.pharmacyRepository.find();
  }

  async findOne(id: number): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findOneBy({ id });
    if (!pharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return pharmacy;
  }

  async update(id: number, updatePharmacyDto: UpdatePharmacyDto): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.preload({
      id,
      ...updatePharmacyDto,
    });
    if (!pharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return this.pharmacyRepository.save(pharmacy);
  }

  async update2(id: number, updatePharmacyDto: UpdatePharmacyDto): Promise<Pharmacy> {
    const pharmacy = await this.pharmacyRepository.findOne(
      {
        where: {id:id}
      }
    );
    console.log(pharmacy.address + "updated")
    if (!pharmacy) {
      throw new NotFoundException('Pharmacy not found');
    }
    return this.pharmacyRepository.save(pharmacy);
  }

  async remove(id: number): Promise<void> {
    const result = await this.pharmacyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException('Pharmacy not found');
    }
  }
}
