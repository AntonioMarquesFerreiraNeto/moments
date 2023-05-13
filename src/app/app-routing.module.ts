import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';
import { MomentComponent } from './components/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'new-moments', component: NewMomentsComponent},
  {path: 'moments/:id', component: MomentComponent},
  {path: 'moments/edit/:id', component: EditMomentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
