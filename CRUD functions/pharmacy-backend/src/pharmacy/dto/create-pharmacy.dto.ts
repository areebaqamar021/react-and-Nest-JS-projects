import { IsString, IsEmail, IsDateString } from 'class-validator';

export class CreatePharmacyDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly address: string;

  @IsString()
  readonly city: string;

  @IsEmail()
  readonly email: string;

  @IsDateString()
  readonly dateOfEstablishment: string;
}
