import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    PublicComponent,
    HomeComponent,
    ShopComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ]
})
export class PublicModule { }
