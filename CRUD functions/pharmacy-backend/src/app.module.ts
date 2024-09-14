import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PharmacyModule } from './pharmacy/pharmacy.module'; 
import { Pharmacy } from './pharmacy/pharmacy.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '', 
      database: 'pharmacy_db', 
      entities: [Pharmacy],
      synchronize: true,
    }),
    PharmacyModule,
  ],
})
export class AppModule {}
