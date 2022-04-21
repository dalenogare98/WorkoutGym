
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/view/home/home.component';
import { BolaoComponent } from './components/view/bolao/bolao.component';
import { BolaocopaComponent } from './components/view/bolaocopa/bolaocopa.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "bolaobrasileirao", component: BolaoComponent},
  {path: "bolaocopadomundo", component: BolaocopaComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
