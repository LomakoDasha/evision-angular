import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { VacancyComponent } from './pages/vacancy/vacancy.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutUsPart1Component } from './pages/about-us/about-us-part1/about-us-part1.component';
import { AboutUsPart2Component } from './pages/about-us/about-us-part2/about-us-part2.component';
import { AboutUsPart3Component } from './pages/about-us/about-us-part3/about-us-part3.component';
import { AboutUsPart4Component } from './pages/about-us/about-us-part4/about-us-part4.component';
import { HomePart1Component } from './pages/home/home-part1/home-part1.component';
import { HomePart2Component } from './pages/home/home-part2/home-part2.component';
import { HomePart3Component } from './pages/home/home-part3/home-part3.component';
import { HomePart4Component } from './pages/home/home-part4/home-part4.component';
import { ProductsPart1Component } from './pages/products/products-part1/products-part1.component';
import { ProductsPart2Component } from './pages/products/products-part2/products-part2.component';
import { VacancyPart1Component } from './pages/vacancy/vacancy-part1/vacancy-part1.component';
import { VacancyPart2Component } from './pages/vacancy/vacancy-part2/vacancy-part2.component';
import { VacancyPart3Component } from './pages/vacancy/vacancy-part3/vacancy-part3.component';
import { ContactsPart1Component } from './pages/contacts/contacts-part1/contacts-part1.component';
import { ContactsPart2Component } from './pages/contacts/contacts-part2/contacts-part2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    VacancyComponent,
    ContactsComponent,
    AboutUsPart1Component,
    AboutUsPart2Component,
    AboutUsPart3Component,
    AboutUsPart4Component,
    HomePart1Component,
    HomePart2Component,
    HomePart3Component,
    HomePart4Component,
    ProductsPart1Component,
    ProductsPart2Component,
    VacancyPart1Component,
    VacancyPart2Component,
    VacancyPart3Component,
    ContactsPart1Component,
    ContactsPart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    HomePart1Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
