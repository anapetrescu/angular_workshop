import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  {path:'', component: AuthComponent},
  {path:'signin', component: LoginComponent},
  {path:'signup', component: RegisterComponent},
  {path:'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
