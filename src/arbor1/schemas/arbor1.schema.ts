
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose'

export type Arbor1Document = Arbor1 & Document;

@Schema()
export class Arbor1 {

  @Prop()
  data: string;

  @Prop()
  description: string;

  @Prop()
  arbor: string;

}

export const Arbor1Schema = SchemaFactory.createForClass(Arbor1);