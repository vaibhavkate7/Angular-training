import { Component } from "@angular/core";
import { NgForOf } from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor } from "@angular/common";

@Component({
  selector:'app-profile',
  // template:`<h1>profile Compoent</h1>`,
  templateUrl:'./profile.component.html',
  imports: [NgFor],
})
   
export class ProfileCompoent{
 students=["vaibhav","aniket","rahil","vishal","peter"]

 studentData=[
  {
    name:'vaibhav',
    age:'21',
    email:'vaibhav@test.com'
  },
  {
    name:'aniket',
    age:'24',
    email:'aniket@test.com'
  },
  {
    name:'rahil',
    age:'26',
    email:'rahil@test.com'
  },
  {
    name:'vishal',
    age:'28',
    email:'vishal@test.com'
  },
  {
    name:'peter',
    age:'30',
    email:'peter@test.com'
  }
 ]

 
}