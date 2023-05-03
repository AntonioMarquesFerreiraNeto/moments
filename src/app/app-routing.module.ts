import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NewMomentsComponent } from './components/pages/new-moments/new-moments.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'About', component: AboutComponent},
  {path: 'new-moments', component: NewMomentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
