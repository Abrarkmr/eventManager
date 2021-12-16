import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import {FormControl} from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ename1: string = "";
  desc1: string = "";
  oname1: string = "";
  parts1: string = "";
  date1: string = "";
  date2: string = "";
  dataLoaded:boolean=false;
  event: any=[];
  tempObj: any = {};
  tempArr1:any=[];

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private spinner: NgxSpinnerService, public data: DataService) {
    this.data.fetchStudentsFromStorage();
    this.dataLoaded=true;
   }

  ngOnInit(): void {
  }

  storeIt(){
    this.dataLoaded=false;
    this.tempObj.ename1=this.ename1;
    this.tempObj.desc1=this.desc1;
    this.tempObj.oname1=this.oname1;
    this.tempObj.parts1=this.parts1;
    this.tempObj.date1=this.date1;
    this.tempObj.date2=this.date2;
    this.data.students.push(this.tempObj);
    this.data.addStudentsToStorage(this.data.students);
    this.dataLoaded=true;
  }

  deleteIt(eventName:String){
    console.log("eventName->"+eventName);
    this.dataLoaded=false;
    for(var i=0;i<this.data.students.length;i++){
      if(this.data.students[i].ename1==eventName){}
      else{
        this.tempArr1.push(this.data.students[i]);
      }
    }
    this.data.students=[];
    this.data.students=this.tempArr1;
    this.data.addStudentsToStorage(this.data.students);
    this.dataLoaded=true;
  }

}
