import { Module } from '@nestjs/common';
import { DiskModule } from '../disk/disk.module';
import { CpuModule } from '../cpu/cpu.module';
import { ComputerController } from './computer.controller';

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
