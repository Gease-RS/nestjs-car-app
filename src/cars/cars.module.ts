import { CarsResolver } from './cars.resolver';
import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';

@Module({
  imports: [],
  providers: [CarsService, CarsResolver],
  exports: [CarsService],
})
export class CarsModule {}
