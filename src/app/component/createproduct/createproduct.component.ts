import { Router } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  form:any;
  productid:any;
  constructor(private fb:FormBuilder, private service:ProductService, private router:Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['', Validators.required],
      price:['', Validators.required],
      quantity:['', Validators.required],
      
    })
  }

  get name(){
    return this.form.get('name');
  }
  get price(){
    return this.form.get('price');
  }
  get quantity(){
    return this.form.get('quantity');
  }
 
  submitForm(formValue:any){
    this.service.createProduct(formValue).subscribe(product => {
      this.router.navigate(['/detailsJob', product])
    });
  }
}
