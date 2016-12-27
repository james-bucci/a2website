import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot([
      { path: 'home', component : HomeComponent },
      { path: 'about', component : AboutComponent },
      { path: '', redirectTo : 'welcome', pathMatch : 'full' },
      { path: '**', redirectTo : 'welcome', pathMatch : 'full' }
    ])
  ],
  declarations: [ 
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
