import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule],
  providers: [ComputerService],
})
export class ComputerModule {}
