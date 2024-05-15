import { Module } from '@nestjs/common';
// import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { FileModule } from './file/file.module';
// import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { Arbor1Module } from './arbor1/arbor1.module';

@Module({

  imports: [
    // MongooseModule.forRoot('mongodb+srv://yakubovich96:JaFmaj1GrYuinNoV@cluster0.mqgjr0y.mongodb.net/'),
    MongooseModule.forRoot('mongodb+srv://user:1234@cluster0.mqgjr0y.mongodb.net/'),
    Arbor1Module
    // TrackModule,s
    // FileModule
]
})
export class AppModule {}
