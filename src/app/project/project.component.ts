import { Component } from '@angular/core';
import { NgForOf, } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor, NgIf ,NgSwitch, NgSwitchCase,NgSwitchDefault } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-project',
  imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault,RouterLink, ReactiveFormsModule

],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
student=['vaibhav','aniket','rahil','vishal']
studentsData=[
  {
    name:'vaibhav',
    age:21,
    email:'vaibhav@test.com'
  },
   {
    name:'aniket',
    age:24,
    email:'aniket@test.com'
  },
   {
    name:'rahil',
    age:25,
    email:'rahil@test.com'
  },
   {
    name:'vikas',
    age:27,
    email:'vikas@test.com'
  }
]
//ngIf
  login:boolean=false;

//ngSwitch
color="yellow";

changeColor(color:string){
this.color=color
}

name=new FormControl();
password=new FormControl();

displayValue(){
  console.log(this.name.value,this.password.value);
  
}
//
profileForm=new FormGroup({
  name:new FormControl('vaibhav'),
  password:new FormControl('1234'),
  email:new FormControl('vaibhav@test.com'),

})
onSubmit(){
  console.log(this.profileForm.value);
  
}
setValue(){
  this.profileForm.setValue({
    name:'peter',
    password:"424",
    email:"peter@test.com"
  })
}
}