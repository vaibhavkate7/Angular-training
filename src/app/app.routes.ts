import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileCompoent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileCompoent},
  {path:'project',component:ProjectComponent},
  {path:'',component:HomeComponent}
];
