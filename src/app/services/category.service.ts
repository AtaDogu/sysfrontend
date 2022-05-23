import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { listResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl="https://localhost:7255/api/Categories/getall";
  constructor(private httpClient:HttpClient) { }


  getCategories():Observable<listResponseModel<Category>>{
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }
}
