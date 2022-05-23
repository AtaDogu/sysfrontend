import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="https://localhost:7255/api/";
  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<listResponseModel<Product>>{
    let newPath=this.apiUrl + "products/getall"
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }
  getProductsByCategoryId(categoryId:number):Observable<listResponseModel<Product>>{
    let newPath=this.apiUrl + "products/getbycategoryId?categoryId="+categoryId
    return this.httpClient.get<listResponseModel<Product>>(newPath);
  }
}
