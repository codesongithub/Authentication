import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productData:Array<any>=[];

  constructor(private http:HttpClient) { }
  addProduct(data:any){
    return this.http.post(`https://60ca0d48772a7600172052bb.mockapi.io/product`,data)
   }
   returnProduct(){
     return this.http.get(`https://60ca0d48772a7600172052bb.mockapi.io/product`)
   }
   returnProductById(id:number){
     return this.http.get(`https://60ca0d48772a7600172052bb.mockapi.io/product/${id}`)
   }
   updateProductById(id:any,data:any){
     return this.http.put(`https://60ca0d48772a7600172052bb.mockapi.io/product/${id}`,data)
   }
   deleteById(id:any){
     return this.http.delete(`https://60ca0d48772a7600172052bb.mockapi.io/product/${id}`)
   }
 }
