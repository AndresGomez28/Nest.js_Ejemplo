import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { Student } from './students.entity';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
    constructor(private studentService: StudentsService) { }
    @Get()
    getAllStudents(): Student[] {
        return this.studentService.getAllStudents();
    }

    @Get(':id')
    getStudentById(@Param('id') id: string): Student {
        return this.studentService.getStudentById(Number(id));
    }

    @Post()
    createStudent(@Body() student: Student): Student {
        return this.studentService.createStudent(student);
    }

    @Patch(':id')
    updateStudent(@Param('id') id: string, @Body() updatedTask: Student): Student {
        return this.studentService.updateStudent(Number(id), updatedTask);
    }

    @Delete(':id')
    deleteStudent(@Param('id') id: string): Student {
        return this.studentService.deleteStudent(Number(id));
    }
}
