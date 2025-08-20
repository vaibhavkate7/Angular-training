import { Component } from '@angular/core';
import { NgForOf,} from "../../../node_modules/@angular/common/common_module.d-NEF7UaHr";
import { NgFor, NgIf  } from '@angular/common';

@Component({
  selector: 'app-project',
  imports: [NgFor,NgIf ],
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

  login:boolean=false;
 
}
