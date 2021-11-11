import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CreateproductComponent } from './component/createproduct/createproduct.component';
import { UpdateproductComponent } from './component/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './component/deleteproduct/deleteproduct.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { ProductdetailsComponent } from './component/productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    NavbarComponent,
    CreateproductComponent,
    UpdateproductComponent,
    DeleteproductComponent,
    SigninComponent,
    SignupComponent,
    NotfoundComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
