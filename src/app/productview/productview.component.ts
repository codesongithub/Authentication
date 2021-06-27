import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {

  currentId:any;
  currentProductData:any;
  

  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService) {
    this.currentId=activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
    this.productService.returnProductById(this.currentId).subscribe((res)=>{
      this.currentProductData=res
      
    })
  }

}
