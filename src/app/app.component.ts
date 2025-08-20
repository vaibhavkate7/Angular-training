import { Component, effect, EnvironmentInjector,signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileCompoent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProjectComponent } from "./project/project.component";
@Component({
  selector: 'app-root',
  imports: [
    LoginComponent, 
    SignupComponent, 
    ProfileCompoent, 
    AppComponent, 
    FormsModule, 
    ProjectComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
