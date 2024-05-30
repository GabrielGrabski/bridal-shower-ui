import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    FeaturesRoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class FeaturesModule { }
