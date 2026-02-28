import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Student } from './pages/users/student/student';
import { Admin } from './pages/users/admin/admin';
import { Instructor } from './pages/users/instructor/instructor';

interface Users {
  email: string;
  password: string;
  type: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Student, Instructor, Admin, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('login');

  email: string = '';
  password: string = '';
  answer: string = '';
  role: string = '';

  userList: Users[] = [
    { email: 'chris@gmail.com', password: '123', type: 'admin' },
    { email: 'tian@gmail.com', password: '123', type: 'instructor' },
    { email: 'chan@gmail.com', password: '123', type: 'student' }
  ];

  public Validate() {
    const login = this.userList.find(user => user.email === this.email && user.password === this.password);

    if (login) {
      this.answer = 'Login success';
      this.role = login.type;
    } else {
      this.answer = 'Invalid login';
      this.role = 'Unknown user.';
    }
  }
}