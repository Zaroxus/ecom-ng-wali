import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './public/home/home.component';
import { PublicComponent } from './public/public.component';
import { ShopComponent } from './public/shop/shop.component';
import { ProductDetailsComponent } from './public/product-details/product-details.component';


const routes: Routes = [
  {
    path: '', component: PublicComponent
    , children: [
      { path: 'home', component: HomeComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'product-details', component: ProductDetailsComponent }
    ]
  },
  { path: 'admin', component: AdminComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
