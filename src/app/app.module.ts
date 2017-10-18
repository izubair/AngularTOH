import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }  from './app.component';
//import { HeroDetailComponent } from './hero-detail.component';
//import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
//import { HeroService } from './hero.service';

import { HeroesModule } from './heroes/heroes.module';

import { AdminModule } from './admin/admin.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { RouterModule } from '@angular/router';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HeroesModule,
        AdminModule,
        LoginRoutingModule,
        RouterModule.forRoot([           
            {
                path: 'dashboard',
                component: DashboardComponent
            },            
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            }
        ])
    ],
    declarations: [
        AppComponent,  
        LoginComponent,
        DashboardComponent
    ],
     bootstrap:    [ AppComponent ]
})
export class AppModule { }
