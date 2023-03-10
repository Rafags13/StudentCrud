import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(private prisma: PrismaService) {}

  async create(createStudentDto: CreateStudentDto) {
    return await this.prisma.student.create({
      data: {...createStudentDto}
    });
  }

  async findAll() {
    return await this.prisma.student.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.student.findFirst({where: {id}});
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: {id},
      data: {...updateStudentDto}
    });
  }

  remove(id: number) {
    return this.prisma.student.delete({where: {id}});
  }
}
