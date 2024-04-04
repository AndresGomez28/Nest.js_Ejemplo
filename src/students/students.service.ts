import { Injectable } from '@nestjs/common';
import { Student } from './students.entity';

@Injectable()
export class StudentsService {
    private students: Student[] = [];
    getAllStudents(): Student[] {
        return this.students;
    }

    getStudentById(id: number): Student {
        return this.students.find((student) => student.id === id);
    }

    createStudent(student: Student): Student {
        this.students.push(student);
        return student;
    }

    updateStudent(id: number, updatedStudent: Student): Student {
        const studentIndex = this.students.findIndex((student) => student.id === id);
        if (studentIndex !== -1) {
            this.students[studentIndex] = { ...this.students[studentIndex], ...updatedStudent };
            return this.students[studentIndex];
        }
        return null;
    }

    deleteStudent(id: number): Student {
        const studentIndex = this.students.findIndex((student) => student.id === id);
        if (studentIndex !== -1) {
            const deletedStudent = this.students.splice(studentIndex, 1);
            return deletedStudent[0];
        }
        return null;
    }
}
