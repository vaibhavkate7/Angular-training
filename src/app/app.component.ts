import { Component, effect, EnvironmentInjector,signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileCompoent } from './profile/profile.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from "./project/project.component";
import { HeaderComponent } from "./header/header.component";
@Component({
  selector: 'app-root',
  imports: [
    LoginComponent,
    ProfileCompoent,
    AppComponent,
    FormsModule,
    ProjectComponent,
    RouterOutlet,
    HeaderComponent,
    HeaderComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

