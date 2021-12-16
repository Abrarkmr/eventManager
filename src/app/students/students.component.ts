import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentName: string="";
  phone: string="";
  department: string="";
  semester: string="";

  students: any = [];
  tempObj: any = {};
  constructor(private data: DataService) { }

  ngOnInit(): void {

  }

  storeIt(){
    this.tempObj.studentName=this.studentName;
    this.tempObj.phone=this.phone;
    this.tempObj.department=this.department;
    this.tempObj.semester=this.semester;
    this.students.push(this.tempObj);
    localStorage.setItem('child',JSON.stringify(this.tempObj));
    this.data.fetchStudentsFromStorage();
    this.tempObj={};
  }

  deleteIt(){
    localStorage.removeItem('child');
    // window.location.reload();
  }

}
