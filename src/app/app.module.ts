import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { Content1Component } from './components/content/content1/content1.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/view/home/home.component';
import { PlanComponent } from './components/view/plan/plan.component';
import { Content2Component } from './components/content/content2/content2.component';
import { Content3Component } from './components/content/content3/content3.component';
import { Content4Component } from './components/content/content4/content4.component';
import { Content5Component } from './components/content/content5/content5.component';
import { Content6Component } from './components/content/content6/content6.component';
import { BolaoComponent } from './components/view/bolao/bolao.component';
import { NavBolaoComponent } from './components/view/bolao/nav-bolao/nav-bolao.component';
import { BolaocopaComponent } from './components/view/bolaocopa/bolaocopa.component';
import { NavBolaoCopaComponent } from './components/view/bolaocopa/nav-bolao-copa/nav-bolao-copa.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PlanComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    BolaoComponent,
    NavBolaoComponent,
    BolaocopaComponent,
    NavBolaoCopaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
