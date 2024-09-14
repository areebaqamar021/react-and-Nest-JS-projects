import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { CreatePharmacyDto } from './dto/create-pharmacy.dto';
import { UpdatePharmacyDto } from './dto/update-pharmacy.dto';
import { Pharmacy } from './pharmacy.entity';

@Controller('pharmacy')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Post()
  async create(@Body() createPharmacyDto: CreatePharmacyDto) {
    var response = null
    response = await this.pharmacyService.create(createPharmacyDto);
    return {
      code : 200,
      message: 'successfully posted',
      object : response
    }
  }

  @Get()
  async findAll() {
    var getAll = null
    getAll = await this.pharmacyService.findAll();
    return {
      code : 200,
      message: 'successfully posted',
      object : getAll
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    var findone = null
    findone = await this.pharmacyService.findOne(id);
    return {
      code : 200,
      message: 'successfully posted',
      object : findone
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePharmacyDto: UpdatePharmacyDto,
  ) {
    var updatephar = null
    updatephar = await this.pharmacyService.update2(id, updatePharmacyDto);
    return {
      code : 200,
      message: 'successfully posted',
      object : updatephar
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    var deletephar = null
    deletephar = await this.pharmacyService.remove(id);
    return {
      code : 200,
      message: 'successfully posted',
      object : deletephar
    }
  }
}
