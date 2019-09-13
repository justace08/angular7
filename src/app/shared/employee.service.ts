import { Injectable } from '@angular/core';
import { Employee } from './employee.model'; 
import { HttpClient } from "@angular/common/http"; 

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData : Employee;
  readonly rootURL = "http://localhost:60744/api"

  constructor(private http: HttpClient) { }
  
  postEmployee(formData : EmployeeService){
    return this.http.post(this.rootURL+'/Employees', formData);
  }
}
