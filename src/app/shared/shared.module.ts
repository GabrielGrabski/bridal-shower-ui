import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './button/button.component';
import { ItemsComponent } from './items/items.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ButtonComponent,
    ItemsComponent
  ],
  exports: [
    HeaderComponent,
    ButtonComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
