import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 tast='';
 taskList:{id:number,task:string}[]=[]

 addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.tast})
  console.log(this.taskList);
 }
}
