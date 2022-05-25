import { CartService } from './../../services/cart.service';
import { ProductService } from './../../services/product.service';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[]=[];
  dataLoaded=false;
  filterText="";

  constructor(private productService:ProductService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private cartService:CartService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategoryId(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
  }

  getProducts(){
    this.productService.getProducts().subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
  }
  getProductsByCategoryId(categoryId:number){
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true
    })
  }
  addToCart(product:Product){
    if (product.unitsInStock>0) {
      this.toastrService.success("Added to Cart",product.productName)
      this.cartService.addToCart(product);
    }else {this.toastrService.error("The product could not be added to the cart","Error")}

  }

}
