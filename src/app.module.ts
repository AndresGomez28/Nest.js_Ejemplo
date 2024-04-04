import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './students/students.entity';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [Student, StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
