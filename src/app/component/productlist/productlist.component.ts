import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  productList:any;
  constructor(private service:ProductService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(products => this.productList = products)
  }

}
