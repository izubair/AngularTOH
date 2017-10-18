﻿import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';

import { HeroRoutingModule } from './heroes-routing.module';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroRoutingModule
    ],
    declarations: [       
        HeroDetailComponent,
        HeroesComponent
      
    ],
    providers: [HeroService]
})
export class HeroesModule { }
