import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  baseUrl = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}
