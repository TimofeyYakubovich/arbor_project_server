import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Arbor1Service } from "./arbor1.service";
import { CreateArbor1Dto } from "./dta/create-arbor1.dto";
import { ObjectId } from 'mongoose';


@Controller('arbor1')
export class Arbor1Controller {

    constructor(private arbor1Service : Arbor1Service) {}

    @Post()
    create(@Body() dto: CreateArbor1Dto) {
        return this.arbor1Service.create(dto);
    }

    @Get()
    getAll() {
        return this.arbor1Service.getAll()
    }

    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.arbor1Service.delete(id)
    }

    @Put(':id')
    update(@Param('id') id: ObjectId, @Body() dto: CreateArbor1Dto) {
        return this.arbor1Service.update(id, dto)
    }

}