import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productList:Array<any>=[]

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.fetchProduct()
  }
  fetchProduct(){
    this.productService.returnProduct().subscribe((res:any)=>{
      this.productList=res
    });
  }
  deleteprod(id:any){
    this.productService.deleteById(id).subscribe(()=>{
      this.fetchProduct()
    })
}

}
