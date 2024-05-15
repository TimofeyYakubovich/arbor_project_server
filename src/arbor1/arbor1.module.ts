import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Arbor1, Arbor1Schema } from './schemas/arbor1.schema';
import { Arbor1Controller } from './arbor1.controller';
import { Arbor1Service } from './arbor1.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Arbor1.name, schema: Arbor1Schema}]),
  ],
  controllers: [Arbor1Controller],
  providers: [Arbor1Service]
})
export class Arbor1Module {}