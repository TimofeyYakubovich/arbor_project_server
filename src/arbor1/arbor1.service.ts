import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Arbor1, Arbor1Document } from "./schemas/arbor1.schema";
import { CreateArbor1Dto } from "./dta/create-arbor1.dto";

@Injectable()
export class Arbor1Service {

    constructor(@InjectModel(Arbor1.name) private arbor1Model: Model<Arbor1Document>) {}

    async create(dto: CreateArbor1Dto): Promise<Arbor1> {
        const arbor = await this.arbor1Model.create(dto)
        return arbor;
    }

    async getAll(): Promise<Arbor1[]> {
        const tracks = await this.arbor1Model.find()
        return tracks
    }

    async delete(id: ObjectId): Promise<ObjectId> {
        const track = await this.arbor1Model.findByIdAndDelete(id)
        return track._id
    }

    async update(id: ObjectId, dto: CreateArbor1Dto): Promise<Arbor1> {
        const updatedArbor = await this.arbor1Model.findByIdAndUpdate(id, dto, { new: true });
        return updatedArbor._id;
    }

}
