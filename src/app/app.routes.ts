import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileCompoent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileCompoent},
  {path:'project',component:ProjectComponent},
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileCompoent},
  {path:'user/:id/:name',component:UserComponent},
  {path:'**',component:PageNotFoundComponent}
];
