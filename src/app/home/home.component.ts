import { Component, } from '@angular/core';
import {  Router, RouterLink } from '@angular/router'
@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router:Router){}
 goToProfile(){
  this.router.navigate(['profile'],{queryParams:{name:'vaibhav kate'}})
 }

  users = [
    {
      id: '1',
      name: 'vaibhav',
      age: 21,
      email: 'viabhav@test.com'
    },
    {
      id: '2',
      name: 'aniket',
      age: 24,
      email: 'aniket@test.com'
    },
    {
      id: '3',
      name: 'rahil',
      age: 26,
      email: 'rahil@test.com'
    },
    {
      id: '4',
      name: 'vikas',
      age: 24,
      email: 'vikas@test.com'
    },
    {
      id: '5',
      name: 'peter',
      age: 24,
      email: 'peter@test.com'
    },
 ]
}
