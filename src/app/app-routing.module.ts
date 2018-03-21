import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { UsersComponent } from './components/users/users.component';

import { PostsComponent } from './components/posts/posts.component';

import { NotFoundComponent } from './components/not-found/not-found.component';

import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes =[
  {path: '', component:HomeComponent},
  {path: 'users', component:UsersComponent},
  {path: 'posts', component:PostsComponent},
  {path: 'post-details/:id', component:PostDetailsComponent},
  {path: '**', component:NotFoundComponent}

];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
