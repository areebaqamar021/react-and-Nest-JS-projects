import { IsString, IsOptional, IsEmail, IsDate, IsNotEmpty } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePharmacyDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  city?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  dateOfEstablishment?: Date;
}
