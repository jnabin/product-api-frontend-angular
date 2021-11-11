import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product:any;
  constructor(private service:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.productById(id).subscribe(job => {
      console.log(job);
      this.product = job;
    });
  }

}
