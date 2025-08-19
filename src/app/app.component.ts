import { Component, effect, EnvironmentInjector,signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileCompoent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent,ProfileCompoent,AppComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 tast='';
 taskList:{id:number,task:string}[]=[]
 addTask(){
  this.taskList.push({id:this.taskList.length+1,task:this.tast})
  console.log(this.taskList);
  
 }
}
