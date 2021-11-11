import { AuthenticateGuard } from './authenticate.guard';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { DeleteproductComponent } from './component/deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';

const routes: Routes = [
  {path:'', component:ProductlistComponent},
  {path:'home', component:ProductlistComponent},
  {path:'addProduct', component:CreateproductComponent, canActivate:[AuthenticateGuard]},
  {path:'editProduct/:id', component:UpdateproductComponent, canActivate:[AuthenticateGuard]},
  {path:'deleteProduct/:id', component:DeleteproductComponent, canActivate:[AuthenticateGuard]},
  {path:'detailsProduct/:id', component:ProductdetailsComponent},
  {path:'login', component:SigninComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
